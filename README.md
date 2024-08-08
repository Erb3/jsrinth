<h1 align="center"> JSRinth </h1>
<p align="center">
  <strong>Unofficial</strong> Modrinth API wrapper in Typescript with zero dependencies and full test coverage
  <br><br>
  <img
    src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/github_vector.svg"
    alt="GitHub icon"
  />
</p>

> [!WARNING]
> JSRinth is still in early development, and should probably not be used in production.

## Contributing

We use `bun` for development, but you can use the library Node.js or even web!

> [!IMPORTANT]
> When using with Node.js make sure you are on version v18 or above.
> Otherwise you won't have access to fetch function.

### Install dependencies

Run `bun i`

### Running tests

Run `bun test`

## To-do

- [ ] Linter
- [ ] Formatter
- [x] User-Agent
- [ ] Projects
  - [ ] Search
  - [ ] Get
  - [ ] Edit
  - [ ] Delete
  - [ ] Bulk get
  - [ ] Bulk edit
  - [ ] Random
  - [ ] Create
  - [ ] Change icon
  - [ ] Remove icon
  - [ ] Validate slug / ID
  - [ ] Add gallery image
  - [ ] Edit gallery image
  - [ ] Remove gallery image
  - [ ] Get dependencies
  - [ ] Follow
  - [ ] Unfollow
  - [ ] Schedule publication
- [ ] Versions
  - [ ] List project versions
  - [ ] Get
  - [ ] Edit
  - [ ] Remove
  - [ ] Create
  - [ ] Schedule
  - [ ] Bulk get
  - [ ] Add files
  - [ ] Get by hash
  - [ ] Delete by hash
  - [ ] Bulk get by hash
- [ ] Users
  - [ ] Get
  - [ ] Edit
  - [ ] Get from PAT
  - [ ] Bulk get
  - [ ] Edit avatar
  - [ ] Get projects
  - [ ] Get followed
  - [ ] Get payout history
  - [ ] Withdraw
- [ ] Notifications
  - [ ] Get
  - [ ] Get by ID
  - [ ] Mark as read
  - [ ] Remove
  - [ ] Bulk get
  - [ ] Bulk mark as read
  - [ ] Bulk remove
- [ ] Threads
  - [ ] Get reports
  - [ ] Get report by ID
  - [ ] Edit report
  - [ ] Bulk get reports
  - [ ] Get thread
  - [ ] Send thread message
  - [ ] Bulk get threads
  - [ ] Remove thread message
- [ ] Teams
  - [ ] Get by project
  - [ ] Get by ID
  - [ ] Add user
  - [ ] Bulk get by ID
  - [ ] Join team
  - [ ] Edit team member
  - [ ] Remove team member
  - [ ] Transfer ownership
- [ ] Tags
  - [x] Get categories
  - [ ] Get loaders
  - [ ] Get game versions
  - [ ] Get title + content of license
  - [ ] Get donation platforms
  - [ ] Get report types
  - [ ] Get project types
  - [ ] Get project-side types
- [x] Misc
  - [x] Node statistics
  - [x] Forge updates

## What to implement

JSRinth should **not** implement API endpoints not featured om the API documentation.

## Copyright disclaimer

> [!Important]
> Modrinth is property of Rinth Inc. JSRinth is in no way shape or form affiliated with Rinth Inc.
