module.exports = (fuct) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};
