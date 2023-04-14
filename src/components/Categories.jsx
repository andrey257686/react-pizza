function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, id) => (
          <li
            onClick={() => onChangeCategory(id)}
            className={value === id ? 'active' : ''}
            key={id}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
