import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useProducts = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: productsData= [], refetch } = useQuery({
      queryKey: ["allProducts"],           
      queryFn: async () => {
        const res = await axiosSecure.get(`/allProducts`);
        return res.data;
      },
    });
    return [productsData, refetch];
    
};

export default useProducts;