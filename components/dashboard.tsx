"use client"

import { useState } from "react"
import { CalendarIcon, Coffee, DollarSign, CreditCard, MapPin, Users } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { format } from "date-fns"

import pfp from "@/public/profile.svg"

export default function Dashboard() {
  const [date, setDate] = useState<Date>(new Date())

  // Updated sample data for employees and sales
  const locations = [
    {
      id: "north-wildwood",
      name: "North Wildwood",
      employees: [
        {
          id: 1,
          name: "Alex Johnson",
          image: pfp,
          zone: 3,
          cardCups: 32,
          cardValue: 192.0,
          cashCups: 20,
          cashValue: 120.0,
          compCups: 4,
          tips: 87.25,
        },
        {
          id: 2,
          name: "Sarah Miller",
          image: pfp,
          zone: 1,
          cardCups: 38,
          cardValue: 228.0,
          cashCups: 15,
          cashValue: 90.0,
          compCups: 2,
          tips: 105.5,
        },
        {
          id: 3,
          name: "Mike Davis",
          image: pfp,
          zone: 2,
          cardCups: 29,
          cardValue: 174.0,
          cashCups: 30,
          cashValue: 180.0,
          compCups: 3,
          tips: 76.75,
        },
      ],
    },
    {
      id: "sea-isle-city",
      name: "Sea Isle City",
      employees: [
        {
          id: 4,
          name: "Emma Wilson",
          image: pfp,
          zone: 2,
          cardCups: 35,
          cardValue: 210.0,
          cashCups: 13,
          cashValue: 78.0,
          compCups: 1,
          tips: 92.75,
        },
        {
          id: 5,
          name: "James Taylor",
          image: pfp,
          zone: 4,
          cardCups: 42,
          cardValue: 252.0,
          cashCups: 18,
          cashValue: 108.0,
          compCups: 2,
          tips: 118.5,
        },
      ],
    },
    {
      id: "wildwood-crest",
      name: "Wildwood Crest",
      employees: [
        {
          id: 6,
          name: "Sophia Garcia",
          image: pfp,
          zone: 1,
          cardCups: 37,
          cardValue: 222.0,
          cashCups: 22,
          cashValue: 132.0,
          compCups: 2,
          tips: 101.75,
        },
        {
          id: 7,
          name: "Ethan Clark",
          image: pfp,
          zone: 3,
          cardCups: 31,
          cardValue: 186.0,
          cashCups: 25,
          cashValue: 150.0,
          compCups: 4,
          tips: 89.5,
        },
      ],
    },
  ]

  // Updated summary statistics calculation
  const calculateSummary = (locationId: string) => {
    const location = locations.find((loc) => loc.id === locationId)
    if (!location) return { totalSales: 0, totalEmployees: 0, avgSales: 0, totalTips: 0, totalCups: 0 }

    const employees = location.employees
    const totalCardSales = employees.reduce((sum, emp) => sum + emp.cardValue, 0)
    const totalCashSales = employees.reduce((sum, emp) => sum + emp.cashValue, 0)
    const totalSales = totalCardSales + totalCashSales
    const totalEmployees = employees.length
    const avgSales = totalSales / totalEmployees
    const totalTips = employees.reduce((sum, emp) => sum + emp.tips, 0)
    const totalCups = employees.reduce((sum, emp) => emp.cardCups + emp.cashCups + emp.compCups, 0)

    return { totalSales, totalEmployees, avgSales, totalTips, totalCups }
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$5,231.50</div>
                <p className="text-xs text-muted-foreground">+20.1% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">Across 3 locations</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Average Sales</CardTitle>
                <Coffee className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$747.36</div>
                <p className="text-xs text-muted-foreground">Per employee</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Tips</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$672.00</div>
                <p className="text-xs text-muted-foreground">+15.2% from yesterday</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="north-wildwood">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="north-wildwood">North Wildwood</TabsTrigger>
                <TabsTrigger value="sea-isle-city">Sea Isle City</TabsTrigger>
                <TabsTrigger value="wildwood-crest">Wildwood Crest</TabsTrigger>
              </TabsList>
              <div className="ml-auto">
                <Select defaultValue="today">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <TooltipProvider>
              {locations.map((location) => (
                <TabsContent key={location.id} value={location.id} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {location.employees.map((employee) => (
                      <Card key={employee.id}>
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-muted flex items-center justify-center">
                            <Image
                                src={employee.image || "/placeholder.svg"}
                                alt={employee.name}
                                width={32}
                                height={32}
                                className="max-h-full max-w-full" // Will ensure it fits within the container
                            />
                        </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold">{employee.name}</h3>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              <span className="text-xs">Zone {employee.zone}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <p className="text-xs text-muted-foreground">Card Cups</p>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <p className="font-medium cursor-help">{employee.cardCups}</p>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Value: ${employee.cardValue.toFixed(2)}</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Cash Cups</p>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <p className="font-medium cursor-help">{employee.cashCups}</p>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Value: ${employee.cashValue.toFixed(2)}</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Comp Cups</p>
                              <p className="font-medium">{employee.compCups}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Tips</p>
                              <p className="font-medium">${employee.tips.toFixed(2)}</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t bg-muted/50 p-3">
                          <div className="flex w-full items-center justify-between">
                            <p className="text-xs font-medium">Total Sales</p>
                            <p className="font-semibold">${(employee.cardValue + employee.cashValue).toFixed(2)}</p>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Location Summary</CardTitle>
                      <CardDescription>
                        {location.name} - {format(date, "MMMM d, yyyy")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium text-muted-foreground">Total Sales</span>
                          <span className="text-2xl font-bold">
                            ${calculateSummary(location.id).totalSales.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium text-muted-foreground">Employees</span>
                          <span className="text-2xl font-bold">{calculateSummary(location.id).totalEmployees}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium text-muted-foreground">Avg Sales/Employee</span>
                          <span className="text-2xl font-bold">
                            ${calculateSummary(location.id).avgSales.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium text-muted-foreground">Total Tips</span>
                          <span className="text-2xl font-bold">
                            ${calculateSummary(location.id).totalTips.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium text-muted-foreground">Total Cups</span>
                          <span className="text-2xl font-bold">{calculateSummary(location.id).totalCups}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </TooltipProvider>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

