import React, { useEffect, useState } from "react";
import { getCategList } from "../../api/categories.api";

function CategoryList() {
  const [categList, setCategList] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      // get categs list from backend
      const categs = await getCategList();
      setCategList(categs);
    };
    asyncWrapper();
  }, []);

  return (
    <section>
      <h2>Список категорий</h2>
      <ul>
        {categList.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default CategoryList;
