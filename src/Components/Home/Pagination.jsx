import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';


const Pagination = (props) => {
  const { pagination, onClick } = props;
  const totalCount = useSelector(state => state.tasks.totalCount);
  const lastPage = Math.ceil(totalCount / pagination._limit);
  const [page, setPage] = useState(pagination._page);
  console.log("lastPage", lastPage);
  useEffect(() => {
      onClick(page)
  }, [page])

  return (
    <div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <span>{page}</span>
      <button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
