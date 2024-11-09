'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect } from "react";
import { useState } from "react";

export function PaginationDemo(props) {
  const totalPage =  Math.ceil(props.totalItems/5)
  const [activePage, setActivePage] = useState(1)

  useEffect(()=>{
    const offSet = 5 * (activePage-1)
    props.fetchCategories(offSet)
  },[activePage])

  // const totalPage=10
  return (
    (<Pagination>
      <PaginationContent>
        <PaginationItem onClick={()=>setActivePage(activePage-1)}>
          <PaginationPrevious  />
        </PaginationItem>
        {[...Array(totalPage)].map((item,id)=>{
          const count = id + 1
            return (
              <PaginationItem className={count == activePage ?"bg-red-400": null }
                onClick={()=>setActivePage(count)}
              >
              <PaginationLink >{count}</PaginationLink>
             </PaginationItem>
            )
        })}
        <PaginationItem   onClick={()=>setActivePage(activePage+1)} >
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>)
  );
}
