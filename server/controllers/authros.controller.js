const Author = require('../models/author.model');   
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createAuthor = (request, response) => {
    Author.create(request.body) 
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}

module.exports.getAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

module.exports.getOneAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (req, res) => {
    if (!req.body.name || req.body.name.trim() === '') {
        return res.status(400).json({ errors: { name: { message: 'Name is required' } } });
        }
    
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((author) => {
            if (!author) {
            return res.status(404).json({ errors: { notFound: { message: 'Author not found' } } });
            }
            res.json(author);
        })
        .catch((err) => res.status(400).json(err));
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id})
        .then(ok => response.json(ok))
        .catch(err => response.json(err))
} 