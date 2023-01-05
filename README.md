# Example for @angular-architects/module-federation

This examples loads a microfrontend into a shell:

![Microfrontend Loaded into Shell](./result.png)

## Important Files

Have a particular look at the following files:

- ``readme.md``: Shows how to install dependencies and how to start the example
- ``projects\mfe1\webpack.config.js``: Microfrontend config
- ``projects\shell\webpack.config.js``: Shell config
- ``projects\shell\src\app\app.routes.ts``: Lazy route for microfrontend
- ``projects\shell\src\decl.d.ts``: Typing for mapped Url pointing to microfrontend

## Installation and Usage

- Build Libraries ``ng build auth-lib`` ``ng build shared-lib`` ``ng build ui-sdk``
- Start Micro Frontend (remote): ``ng serve mfe1 -o``
- Start Shell (host): ``ng serve shell -o``
- Make sure ``mfe1`` is started before ``shell`` is loaded into the browser
- Use the hyperlink ``flights`` in the ``shell`` to load `mfe1`


## More Details on Module Federation

Have a look at this [article series about Module Federation](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/)

## Angular Trainings, Workshops, and Consulting

- [Angular Trainings and Workshops](https://www.angulararchitects.io/en/angular-workshops/)
- [Angular Consulting](https://www.angulararchitects.io/en/consulting/)
