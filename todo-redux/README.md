# Exercice Redux

## Installer les dépendances

`npm install` pour réinstaller le contenu de `package-lock.json`

## Installer redux

`npm install redux react-redux redux-devtools-extension`

## Le state 

Le state devra avoir cette forme là

```
{
  newTodo: 'Achet',
  todos: [{
    id: 1,
    text: 'Acheter du pain',
    completed: false,
  }, {
    id: 2,
    text: 'Aller au sport',
    completed: true,
  }, {
    id: 3,
    text: 'Utiliser Redux',
    completed: false,
  }],
}
```

## Créer store

Reprendre le code de hello-redux dans index.js

Utiliser combineReducers pour pouvoir utiliser 2 reducers :

* le premier qui s'occupe de la string newTodo
* le premier qui s'occupe du tableau todos

Prévoir des valeurs initials (comme avec count)

## Ecrire les reducers se basant sur les actions TODO_ADD, TODO_CHANGE

Dans le newTodoReducer, traiter TODO_CHANGE. L'action TODO_CHANGE ressemblera à :

```
{
  type: 'TODO_CHANGE',
  value: 'Ache'
}
```

Dans le todosReducer, traiter TODO_ADD. L'action TODO_ADD ressemblera à :

```
{
  type: 'TODO_CHANGE',
  value: {
    id: 123,
    text: 'Acheter du pain',
    completed: false,
  }
}
```

Attention dans le todosReducer on manipule un tableau, il faut
créer un nouveau tableau (changement immuable)


## Ecrire les versions connectées des composants TodoForm et TodoList

Utiliser fonction connect et mapStateToProps pour connecter les composants.
