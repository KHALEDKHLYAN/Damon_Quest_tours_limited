'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function BookingForm() {
  const searchParams = useSearchParams()
  const [packageSlug, setPackageSlug] = useState<string | null>(null)

  useEffect(() => {
    setPackageSlug(searchParams.get('package'))
  }, [searchParams])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    groupSize: '',
    specialRequirements: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { ...formData, packageSlug })
    // Reset form or show success message
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {packageSlug && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
          <p className="font-bold">Selected Package</p>
          <p>You're booking for the package: {packageSlug}</p>
        </div>
      )}
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="travelDate">Preferred Travel Date</Label>
        <Input
          id="travelDate"
          name="travelDate"
          type="date"
          value={formData.travelDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="groupSize">Group Size</Label>
        <Select name="groupSize" onValueChange={(value) => handleSelectChange('groupSize', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select group size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 person</SelectItem>
            <SelectItem value="2">2 people</SelectItem>
            <SelectItem value="3-5">3-5 people</SelectItem>
            <SelectItem value="6+">6+ people</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="specialRequirements">Special Requirements (Optional)</Label>
        <Textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          placeholder="Any special requirements or preferences?"
        />
      </div>
      <Button type="submit" className="w-full">Book Now</Button>
    </form>
  )
}

