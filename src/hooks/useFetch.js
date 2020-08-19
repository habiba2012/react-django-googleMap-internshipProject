import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:8000/api/markers/?format=json"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return { data };
}
