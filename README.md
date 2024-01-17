# Desafio-NTG1

Reposiório GitHub:  https://github.com/NiltonPita/Desafio-NTG1


# Considerações Gerais

Você deve fazer um desenho de arquitetura de um cloud provider da sua preferencia que atenda/resolva o problema proposto.

Na avaliação você tera que defender a sua arquitetura respondendo perguntas direcionado ao que foi apresentado como solução.

Considere como um projeto novo, pense em uma construção visando desde ao fluxo de desenvolvimento, publicação do artefato e deploy da aplicação.

Implemente diferentes ambientes de deploy (desenvolvimento, teste, produção) com configurações apropriadas.


# O Problema

O desafio que você deve resolver é a implantação da infraestrutura (obrigatório) e da aplicação de Comentários em versão API (opcional) usando ferramentas open source da sua preferência.

Você precisa criar o ambiente de execução desta API com o maior número de passos automatizados possível, inclusive a esteira de deploy.

A aplicação será uma API REST cuja a função está disponível neste arquivo. Através dela os internautas enviarão comentários em texto de uma máteria e acompanharão o que outras pessoas estão falando sobre o assunto em destaque. O funcionamento básico da API consiste em uma rota para inserção dos comentários e uma rota para listagem.

Os comandos de interação com a API são os seguintes:

* Criando e listando comentários por matéria

```
# matéria 1
curl -sv host/api/comment/new -X POST -H 'Content-Type: application/json' -d '{"email":"alice@example.com","comment":"first post!","content_id":1}'
curl -sv host/api/comment/new -X POST -H 'Content-Type: application/json' -d '{"email":"alice@example.com","comment":"ok, now I am gonna say something more useful","content_id":1}'
curl -sv host/api/comment/new -X POST -H 'Content-Type: application/json' -d '{"email":"bob@example.com","comment":"I agree","content_id":1}'

# matéria 2
curl -sv host/api/comment/new -X POST -H 'Content-Type: application/json' -d '{"email":"bob@example.com","comment":"I guess this is a good thing","content_id":2}'
curl -sv host/api/comment/new -X POST -H 'Content-Type: application/json' -d '{"email":"charlie@example.com","comment":"Indeed, dear Bob, I believe so as well","content_id":2}'
curl -sv host/api/comment/new -X POST -H 'Content-Type: application/json' -d '{"email":"eve@example.com","comment":"Nah, you both are wrong","content_id":2}'

# listagem matéria 1
curl -sv host/api/comment/list/1

# listagem matéria 2
curl -sv host/api/comment/list/2
```

