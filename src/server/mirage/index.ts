import { createServer, Factory, Model, Response } from "miragejs";
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
      server.createList("user", 200);
    },

    routes() {
      this.timing = 750; //demora de 750 milisegundos
      this.namespace = "api";
      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;
        //Precisa ser convertido para número pois o queryParams só retorna STRING
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(
          200,
          {
            "x-total-count": String(total),
          },
          users
        );
      });
      this.post("/users");
      this.namespace = ""; // dentro do nextJs existem as API routes que caso você passe com o mesmo nome ele irá conflitar
      this.passthrough(); // faz com que continue a requisição para as routes do next caso a rota escolhida não exista no mirage
    },
  });

  return server;
}
