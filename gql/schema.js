const { gql } = require("apollo-server");

const typeDefs = gql`

    type Usuario{
        id: ID!
        nombres: String!
        apellidos: String!
        nombre_usuario: String!
        correo: String!
        contrasena: String!
        descripcion: Stirng
        personajes: [Personaje]
        redes_sociales: [Redes]
        createdAt: String!
        updatedAt: String!
    }

    type Personaje{
        id: ID!
        nombre: String!
        apodo: String
        imagen: String!
        organizacion: String!
        createdAt: String!
        updatedAt: String!
    }

    type Lista{
        id: ID!
        titulo: String!
        descripcion: String!
        autor: Usuario!
        lista: [ElementoLista]!
        createdAt: String!
        updatedAt: String!
    }

    type ElementoLista{
        nombre: String!
        apodo: String
        imagen: String!
        descripcion: String!
        orden: Int!
    }

    type seguidores{
        id: ID!
        usuario: Usuario!
        siguiendo: Usuario!

    }

    type Redes{
        nombre: String!
        url: String!
    }

`;

module.exports = typeDefs;