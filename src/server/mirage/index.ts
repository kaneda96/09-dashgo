import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type user = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

export function MakeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<user>>({}),
    },

    factories: {
      user: Factory.extend({
        id(i: number) {
          return i + 1;
        },
        // i = index de determinado objeto criado formando a combinação de nome abaixo
        name(i: number) {
          return `User ${i + 1}`;
        },
        email(i: number) {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      //informa quantos usuários é necessário criar ao subir a aplicação
      server.createList("user", 10);
    },

    routes() {
      this.timing = 750; //demora de 750 milisegundos
      this.namespace = "api";
      this.get("/users");
      this.post("/users");
      this.namespace = ""; // dentro do nextJs existem as API routes que caso você passe com o mesmo nome ele irá conflitar
      this.passthrough(); // faz com que continue a requisição para as routes do next caso a rota escolhida não exista no mirage
    },
  });

  return server;
}
