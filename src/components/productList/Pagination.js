import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

function Paginat() {

    return (
        <div className="flex justify-center">
            <Pagination
                aria-label="Page navigation example"
                size="md"

            >
                <PaginationItem>
                    <PaginationLink
                        first
                        href="#" className="font-mont text-[#BDBDBD] text-sm font-bold py-6 px-6"
                    >
                        First
                    </PaginationLink>
                </PaginationItem>


                <PaginationItem>
                    <PaginationLink href="#" className="font-mont text-[##23A6F0] text-sm font-bold py-6 px-6">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className="font-mont text-[##23A6F0] text-sm font-bold py-6 px-6">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className="font-mont text-[##23A6F0] text-sm font-bold py-6 px-6">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                        className="font-mont text-[##23A6F0] text-sm font-bold py-6 px-6"
                    >
                        Next
                    </PaginationLink>
                </PaginationItem>

            </Pagination>
        </div>

    )
}

export default Paginat;

