/* eslint-disable no-unused-vars */
import { useState } from "react"

export function useContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        enquiryType: "",
        message: ""
    })
    
    const [notification, setNotification] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const showNotification = (type, message) => {
        setNotification({ type, message })
        setTimeout(() => {
            setNotification(null)
        }, 5000)
    }

    const closeNotification = () => {
        setNotification(null)
    }

    const handleSubmit = async () => {
        // Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.enquiryType || !formData.message) {
            showNotification('error', 'Please fill in all required fields.')
            return
        }

        setIsSubmitting(true)

        // Prepare the payload explicitly
        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            enquiryType: formData.enquiryType,
            message: formData.message,
            timestamp: new Date().toISOString(),
            source: "Contact Form"
        }

        // Log the exact payload being sent
        console.log('Sending payload:', JSON.stringify(payload, null, 2))
        const webhookURL = "https://afavirtuals.space/webhook/7fc5f461-0c4d-45cf-8ebf-04c8d57f402e"
        try {
            const response = await fetch(webhookURL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
                },
                body: JSON.stringify(payload)
            })

            showNotification('success', 'Message sent successfully! We\'ll get back to you soon.')
            
            // Clear form
            setFormData({
                name: "",
                email: "",
                phone: "",
                enquiryType: "",
                message: ""
            })
            
        } catch (error) {
            console.error('Submission error:', error)
            showNotification('warning', 'Message submitted but confirmation pending. We may have received it.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        formData,
        notification,
        isSubmitting,
        handleChange,
        handleSubmit,
        closeNotification
    }
}