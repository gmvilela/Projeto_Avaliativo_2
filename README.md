# Projeto_Avaliativo_2
Módulo 1 - Projeto Avaliativo 2

Observação: Necessário executar o comando npm install, ter o angular CLI instalado, e NodeJS instalado

Requisitos da Aplicação
A aplicação que deverá ser realizada individualmente, deve contemplar os seguintes requisitos:

Uma Tela de Login contendo um formulário com campos de email e senha. Os campos de email e senha são obrigatórios ( Validar ao disparar o evento de onSubmit). Ao clicar no botão de Entrar e passar pela validação, verificar se é email e se a senha possui 6 caracteres, redirecionar para tela de Dashboard, a tela contém ainda um redirecionamento para “Esqueci minha senha”. Seguir layout conforme o mockup disponibilizado.

Uma tela de Esqueci a Senha contendo um simples formulário com o campo de e-mail, adicionar validator na construção do formulário, esta tela possui um botão de voltar que redireciona o usuário para tela de login.

Um menu lateral, contendo as opções Dashboard, Coleções, Modelos, Obter Ajuda, Enviar Comentários e Logout. Os botões de “Obter Ajuda” e “Enviar Comentários” não possuem ação, o botão de Logout redireciona o usuário para tela de login. O menu deve ser desenvolvido como um componente à parte, para ser referenciado pela tela da aplicação. Seguir layout conforme o mockup disponibilizado.

Uma tela de Dashboard contendo 3 cards: Total de coleções (Exibir o total de coleções cadastradas no json-server) , modelos (Exibir total de modelos) e média de orçamento por coleção (Soma de todos os orçamentos das coleções / total de coleções).

A tela  de Dashboard deve conter uma tabela contendo os 5 maiores orçamentos dentre as coleções, a tabela deve ser formada pelas colunas de Código da Coleção (ColeçãoID), Nome da Coleção, Orçamento e Responsável, ela deve estar ordenada do maior para o menor valor em orçamento.

Uma tela de Listagem de Coleções (consumir rota /colecoes do json-server) contendo uma tabela com as colunas ColecaoID, nome da coleção, estação + lançamento (deve ser um dado combinado entre as propriedades) e responsável, além do botão Criar Coleção que redireciona o usuário para tela de cadastro de coleção. Além disso, as linhas da tabela deverão ser clicáveis e o clique na linha deve redirecionar o usuário para Editar Coleção. Seguir layout conforme o mockup disponibilizado.

Uma tela de Cadastro de Coleção, contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento . Ao clicar no botão salvar, chamar evento de onSubmit e cadastrar unidade via POST na rota /colecoes do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Coleções. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.


Uma tela de Edição de Coleção, contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento. Essa tela precisa receber um parâmetro na rota para identificar que coleção o usuário deseja editar, mostrar no formulário os dados da coleção ao carregar as informações sobre ela. Ao clicar no botão salvar, chamar evento de onSubmit e atualizar a unidade via PUT na rota /colecoes/:id do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Coleções. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.

Uma tela de Listagem de Modelos (consumir rota /modelos do json-server) contendo uma tabela com as colunas ModeloID, nome do modelo, coleção relacionada e responsável, além do botão Criar Modelo que redireciona o usuário para tela de cadastro de modelo. Além disso, as linhas da tabela deverão ser clicáveis e o clique na linha deve redirecionar o usuário para Editar Modelo. Seguir layout conforme o mockup disponibilizado.


Uma tela de Cadastro de Modelos, contendo um formulário com os campos nome, responsável, tipo (tag select do HTML com as opções: bermuda, biquíni, bolsa, boné, calça, calçados, camisa, chapéu, saia.), coleção relacionada (listar todas as coleções cadastradas no json-server) e dois “radio group” para verificar se o modelo possui bordado e se possui estampa. Ao clicar no botão salvar, chamar evento de onSubmit e cadastrar unidade via POST na rota /modelos do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Modelos. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.

Uma tela de Edição de Modelos, contendo um formulário com os mesmos campos presentes no Cadastro de Modelos. Essa tela precisa receber um parâmetro na rota para identificar que modelo o usuário deseja editar, mostrar no formulário os dados do modelo ao carregar as informações sobre ele. Ao clicar no botão salvar, chamar evento de onSubmit e atualizar a unidade via PUT na rota /modelos/:id do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Modelos, além disso um botão Excluir deverá aparecer na tela e o clique será chamado o método DELETE na rota /modelos/:id para remover o modelo, ao fim da exclusão retornar o usuário para “Listagem de Modelos”. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.
