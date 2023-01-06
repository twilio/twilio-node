import util from "util";
import Request from "../../lib/http/request";
import moduleInfo from "../../package.json";
import os from "os";

class Hologram {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }
}

class Holodeck {
  constructor() {
    this.requests = [];
    this.holograms = [];
  }

  mock(response, request) {
    request = request || new Request();
    this.holograms.push(new Hologram(request, response));
  }

  addStandardHeaders(request) {
    var standardHeaders = {
      Accept: "application/json",
      "Accept-Charset": "utf-8",
      "User-Agent": util.format(
        "twilio-node/%s (%s %s) node/%s",
        moduleInfo.version,
        os.platform(),
        os.arch(),
        process.version
      ),
    };
    if (request.method === "POST") {
      standardHeaders["Content-Type"] = "application/x-www-form-urlencoded";
    }
    request.headers = Object.assign(request.headers, standardHeaders);
    return request;
  }

  assertHasRequest(request) {
    var requestWithHeaders = this.addStandardHeaders(request);
    var matchedRequest = this.requests.find(function (req) {
      return req.isEqual(request) || req.isEqual(requestWithHeaders);
    });

    if (!matchedRequest) {
      return;
    }

    const message = `\nHolodeck has never received a request matching: \n ${request}>\n`;

    throw new Error(message);
  }

  async request(opts) {
    opts = opts || {};

    const Auth = {
      auth: {
        username: opts.username,
        password: opts.password,
      },
    };

    var request = new Request(Object.assign(opts, Auth));
    this.requests.push(request);

    const matchedHologramIndex = this.holograms.findIndex((hologram) =>
      hologram.request.isEqual(request)
    );

    if (matchedHologramIndex >= 0) {
      const matchedHologram = this.holograms[matchedHologramIndex];
      this.holograms.splice(matchedHologram, 1);

      const response = matchedHologram.response;
      return {
        statusCode: response.statusCode,
        body: response.body,
      };
    } else {
      throw new Error("Failure: holodeck does not contain response");
    }
  }
}

module.exports = Holodeck;
