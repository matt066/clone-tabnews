function status(request, response) {
  response.status(200).json({ chave: "Teste http status 200 teste fodão" });
}

export default status;
exports.status = status;
