import { ClientModel } from "../models/mongodb/client.js";
import { validateClient, validatePartialClient } from "../schemas/clients.js";

export class ClientController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */

  static async getAll(req, res) {
    const { contactNumber } = req.query;
    const clients = await ClientModel.getAll({ contactNumber });
    return res.json(clients);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const client = await ClientModel.getById({ id });
    if (client) {
      return res.json(client);
    }
    return res.status(404).json({ message: "Client not found" });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */

  static async create(req, res) {
    if (req.body.contactDate) {
      req.body.contactDate = new Date(req.body.contactDate);
    }

    const result = validateClient(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newClient = await ClientModel.create({ input: result.data });

    res.status(201).json(newClient);
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */

  static async delete(req, res) {
    const { id } = req.params;

    const result = await ClientModel.delete({ id });

    if (result === false) {
      return res
        .status(404)
        .json({ message: "No se ha encontrado el cliente" });
    }

    return res.json({ message: "Client deleted" });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */

  static async update(req, res) {
    if (req.body.contactDate) {
      req.body.contactDate = new Date(req.body.contactDate);
    }
    // Validamos parcialmente las info del body
    const result = validatePartialClient(req.body);
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    // Buscamos la pelicula por el indice
    const { id } = req.params;

    const updatedClient = await ClientModel.update({
      id,
      input: result.data,
    });

    return res.json(updatedClient);
  }
}
