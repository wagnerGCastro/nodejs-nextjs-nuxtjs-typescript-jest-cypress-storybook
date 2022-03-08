

## Stacks Frotend

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)


## Stacks Backend

This project uses lot of stuff as:

## DOCKER FILES
  - pgadmin4
    https://github.com/postgres/pgadmin4
  - postgres
    https://github.com/docker-library/postgres 

## Comands
  - Git
    $  git commit --amend  -m "feat(project) - Initialization Project"   

  - Backend
    $ cd ./www/backend-api && npm isntall && npm run dev
  
  - Docker
    $ docker-compose -f ./docker-compose.dev.yml up -d postgres pgadmin4
    $ docker-compose -f ./docker-compose.dev.yml --env-file ./.env.dev up -d mysql webserver
  