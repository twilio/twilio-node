export default class Response<TPayload> {
  constructor(
    public statusCode: number,
    public body: TPayload,
    public headers: any
  ) {}

  toString(): string {
    return "HTTP " + this.statusCode + " " + this.body;
  }
}
