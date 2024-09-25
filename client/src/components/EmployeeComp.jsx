/* eslint-disable react/prop-types */
import React from "react";
import { Table } from "flowbite-react";
import employeedata from "../assets/employee.json";

const EmployeeComp = ({ setClickedEmployee }) => {
  return (
    <div className="overflow-x-auto h-[48vh] ">
      <div className="min-w-full border border-gray-200 sm:rounded-lg">
        <Table className="table-auto w-full text-sm text-left text-gray-500 border-collapse">
          <Table.Head className="bg-gray-50 border border-slate-500 text-xs sm:text-sm sticky top-0 z-30">
            <Table.HeadCell className="border border-slate-400 sticky left-0 top-0 bg-red-500 text-white z-10">
              SI No
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 sticky left-[50px] top-0 bg-red-500 text-white z-10">
              Name
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              Position
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              Department
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              Email
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              Address
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              Phone
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              HireDate
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              Salary
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              Experience
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              Manager
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              Skills
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-red-500 text-white">
              Status
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="h-full">
            {employeedata.employee_details.map((employee, id) => (
              <Table.Row key={id} className="border border-slate-400">
                <Table.Cell className="border border-slate-400 sticky left-0 bg-white">
                  {id + 1}
                </Table.Cell>
                <Table.Cell
                  className="border border-slate-400 sticky left-[50px] bg-white text-red-700 cursor-pointer"
                  onClick={() => setClickedEmployee(employee)}
                >
                  {employee.Name}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.Position}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.Department}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.Email}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.Address}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.Phone}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.HireDate}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.Salary}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.Experience}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.Manager}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.Skills}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {employee.Status}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default EmployeeComp;
