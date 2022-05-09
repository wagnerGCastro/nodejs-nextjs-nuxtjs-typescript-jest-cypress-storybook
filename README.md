

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

## Comands
  # Git
    $  git commit --amend -m "feat(project) - Initialization Project"   

  # Docker
    - build
      $ docker-compose build workspace
      $ docker-compose -f docker-compose.dev.yml --env-file .env.dev build workspace
      $ docker-compose -f docker-compose.stage.yml --env-file .env.stage build workspace

    - up container
      $ docker-compose up -d workspace mysql
      $ docker-compose -f docker-compose.dev.yml --env-file .env.dev up -d workspace mysql 
      $ docker-compose -f docker-compose.stage.yml --env-file .env.stage up -d workspace mysql 

    - exec container
      $ docker-compose -f docker-compose.dev.yml --env-file .env.dev exec workspace bash  
      $ docker exec -it id_constainer bash

    - stop/start container
      $ docker-compose -f docker-compose.dev.yml --env-file .env.dev stop workspace
      $ docker-compose -f docker-compose.dev.yml --env-file .env.dev start workspace
