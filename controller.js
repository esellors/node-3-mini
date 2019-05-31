module.exports = {
   getPlanes: (req, res, next) => {
      const dbInstance = req.app.get('db')

      dbInstance.get_planes(req.params.id)
         .then(planes => {
            res.status(200).send(planes);
            console.log(planes);
         })
         .catch(err => res.status(500).send(err));
   }
}