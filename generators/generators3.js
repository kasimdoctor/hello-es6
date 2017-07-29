// modelling nested comments as a tree structure using generators

class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator] () {
        yield this.content;

        for (let child of this.children) {
            yield* child;
        }
        
        // this will not work!
        // this.children.forEach(child => yield* child);
    }
}

const children = [
    new Comment('wow, that is amazing', []),
    new Comment('not sure if I understood..', []),
    new Comment('why not use existing methods?', [])
];

const tree = new Comment('Custom Implementation of Trees!', children);
console.log(tree);

for (let comment of tree) {
    console.log(comment);
}