import React from "react";
import { Table } from "flowbite-react";
import sampledata from "../assets/samplev1.json";

// eslint-disable-next-line react/prop-types
const StudentTable = ({ setClickedStudent }) => {
  return (
    <div className="overflow-x-auto h-[48vh] ">
      <div className="min-w-full border border-gray-200 sm:rounded-lg">
        <Table className="table-auto w-full text-sm text-left text-gray-500 border-collapse">
          <Table.Head className="bg-gray-50 border border-slate-500 text-xs sm:text-sm sticky top-0 z-30">
            {/* SI No Header - sticky on both top and left */}
            <Table.HeadCell className="border border-slate-400 sticky left-0 top-0 bg-blue-500 text-white z-10">
              SI No
            </Table.HeadCell>
            {/* Name Header - sticky on both top and left */}
            <Table.HeadCell className="border border-slate-400 sticky left-[50px] top-0 bg-blue-500 text-white z-10">
              Name
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-500 text-white">
              Age
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-500 text-white">
              Email
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-500 text-white">
              Address
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-500 text-white">
              Enrollment_year
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-500 text-white">
              FA_English
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-500 text-white">
              FA_Kannada
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-500 text-white">
              FA_Physics
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-500 text-white">
              FA_Chemistry
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-500 text-white">
              FA_Mathematics
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-500 text-white">
              FA_Biology
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="h-full">
            {sampledata.student_details.map((student, id) => (
              <Table.Row key={id} className="border border-slate-400">
                <Table.Cell className="border border-slate-400 sticky left-0 bg-white">
                  {id + 1}
                </Table.Cell>
                <Table.Cell
                  className="border border-slate-400 sticky left-[50px] bg-white text-blue-700 cursor-pointer"
                  onClick={() => setClickedStudent(student)}
                >
                  {student.Name}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Age}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Email}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Address}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Enrollment_year}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_English}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_Kannada}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_Physics}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_Chemistry}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_Mathematics}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_Biology}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default StudentTable;
