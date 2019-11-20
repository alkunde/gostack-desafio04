import React, { Component } from 'react';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://api.adorable.io/avatars/100/julio@alcantara.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://api.adorable.io/avatars/100/diego@fernandes.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://api.adorable.io/avatars/100/gabriel@lisboa.png"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://api.adorable.io/avatars/100/clara@lisboa.png"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://api.adorable.io/avatars/100/cezar@toledo.png"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://api.adorable.io/avatars/100/gabriel@lisboa.png"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://api.adorable.io/avatars/100/clara@lisboa.png"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://api.adorable.io/avatars/100/cezar@toledo.png"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul className="postlist">
        {this.state.posts.map(post => (
          <div className="post" key={post.id}>
            <div className="post-header">
              <img src={post.author.avatar} />
              <div className="details">
                <span>{post.author.name}</span>
                <span>{post.date}</span>
              </div>
            </div>
            <div className="post-content">
              <span>{post.content}</span>
            </div>
            <div className="divider" />
            <ul className="comments">
              {post.comments.map(comment => (
                <div className="comment" key={comment.id}>
                  <img src={comment.author.avatar} />
                  <div className="content">
                    <span><strong>{comment.author.name}</strong> {comment.content}</span>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    );
  }
}

export default PostList;