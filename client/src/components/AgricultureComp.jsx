/* eslint-disable react/prop-types */
import React from "react";
import { Table } from "flowbite-react";
import agriculturedata from "../assets/agriculture.json";

const AgricultureComp = ({ setClickedAgriculture }) => {
  return (
    <div className="overflow-x-auto h-[48vh] ">
      <div className="min-w-full border border-gray-200 sm:rounded-lg">
        <Table className="table-auto w-full text-sm text-left text-gray-500 border-collapse">
          <Table.Head className="bg-gray-50 border border-slate-500 text-xs sm:text-sm sticky top-0 z-30">
            <Table.HeadCell className="border border-slate-400 sticky left-0 top-0 bg-green-500 text-white z-10">
              SI No
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 sticky left-[50px] top-0 bg-green-500 text-white z-10">
              Name
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-green-500 text-white">
              Age
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-green-500 text-white">
              Location
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-green-500 text-white">
              FarmingType
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-green-500 text-white">
              YearsExperience
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-green-500 text-white">
              CropsGrown
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-green-500 text-white">
              ToolsUsed
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-green-500 text-white">
              FarmSize
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-green-500 text-white">
              Phone
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-green-500 text-white">
              Email
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-green-500 text-white">
              Address
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="h-full">
            {agriculturedata.agriculture_details.map((agriculture, id) => (
              <Table.Row key={id} className="border border-slate-400">
                <Table.Cell className="border border-slate-400 sticky left-0 bg-white">
                  {id + 1}
                </Table.Cell>
                <Table.Cell
                  className="border border-slate-400 sticky left-[50px] bg-white text-green-700 cursor-pointer"
                  onClick={() => setClickedAgriculture(agriculture)}
                >
                  {agriculture.Name}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {agriculture.Age}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {agriculture.Location}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {agriculture.FarmingType}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {agriculture.YearsExperience}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {agriculture.CropsGrown}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {agriculture.ToolsUsed}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {agriculture.FarmSize}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {agriculture.Phone}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {agriculture.Email}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {agriculture.Address}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AgricultureComp;
