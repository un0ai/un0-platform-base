"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function QuantumPage() {
  const experiments = [
    {
      id: "EXP001",
      name: "Quantum Entanglement Test",
      status: "Completed",
      qubits: 50,
      duration: "2h 15m",
    },
    {
      id: "EXP002",
      name: "Superposition Analysis",
      status: "Running",
      qubits: 100,
      duration: "45m",
    },
    {
      id: "EXP003",
      name: "Quantum Error Correction",
      status: "Queued",
      qubits: 75,
      duration: "1h 30m",
    },
    {
      id: "EXP004",
      name: "Quantum Teleportation",
      status: "Failed",
      qubits: 25,
      duration: "30m",
    },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Quantum Experiments</CardTitle>
          <CardDescription>Recent quantum computing experiments and their results</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Qubits</TableHead>
                <TableHead>Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {experiments.map((exp) => (
                <TableRow key={exp.id}>
                  <TableCell>{exp.id}</TableCell>
                  <TableCell>{exp.name}</TableCell>
                  <TableCell>{exp.status}</TableCell>
                  <TableCell>{exp.qubits}</TableCell>
                  <TableCell>{exp.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}
