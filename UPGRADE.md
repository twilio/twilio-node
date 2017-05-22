Upgrade Guide

After 3.0.0 all MINOR and MAJOR version bumps will have upgrade notes posted here.

[2017-05-22] 3.1.x to 3.2.x
---------------------------

### CHANGED - Rename video room `Recordings` class to `RoomRecordings`

#### Rationale
- This was done to avoid a class name conflict with another resource.
- Client code should be unaffected unless you manipulate the Recording/RoomRecordings class directly. Accessing room recording metadata via the client should work the same way as before.
