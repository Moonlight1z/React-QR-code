import './NotFound.scss'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404: Страница не найдена</h1>
      <p className="not-found__text">Извините, запрашиваемая страница не существует.</p>
    </div>
  );
};

export default NotFound;