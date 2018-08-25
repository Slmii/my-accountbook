module.exports = app => {

    app.get('/api/users', (req, res) => {
        res.json([
            {
                id: 1,
                name: 'Selami Cetinguney'
            },
            {
                id: 2,
                name: 'Lina Cetinguney'
            },
            {
                id: 3,
                name: 'Baby Cetinguney'
            }
        ]);
    });
    
    app.get('/api/admins', (req, res) => {
        res.json([
            {
                id: 1,
                name: 'Admin 1'
            },
            {
                id: 2,
                name: 'Admin 2'
            },
            {
                id: 3,
                name: 'Admin 3'
            }
        ]);
    });
    
};