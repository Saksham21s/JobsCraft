import React from "react";
import { Page, Text, View, Document, StyleSheet, Link } from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";

// Roboto font Resgistered
Font.register({
    family: "Roboto",
    src: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.woff2",
});


const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 10,
        fontFamily: "Helvetica",
        color: "#333",
    },
    header: {
        textAlign: "center",
        marginBottom: 10,
    },
    name: {
        fontSize: 12, 
        fontWeight: "bold",
        color: "#000",
        marginBottom: 5,
        fontFamily: "Roboto",
    },
    contact: {
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 6, 
        color: "#666",
    },
    contactItem: {
        color: "#666",
        textDecoration: "none",
        marginHorizontal: 5,
    },
    contactSeparator: {
        fontSize: 6,
        color: "#666",
    },
    link: {
        color: "#666",
        textDecoration: "none",
    },
    linkHover: {
        color: "#0073e6",
        textDecoration: "underline",
    },
});


const ModernResumePDF = ({ formData = {} }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {formData.fullName && (
                <View style={styles.header}>
                    <Text style={styles.name}>{formData.fullName}</Text>
                    <View style={styles.contact}>
                        {formData.phone && <Text style={styles.contactItem}>{formData.phone}</Text>}
                        {formData.email && (
                            <>
                                <Link src={`mailto:${formData.email}`} style={styles.link}>{formData.email}</Link>
                                <Text style={styles.contactSeparator}>|</Text>
                            </>
                        )}
                        {formData.linkedin && (
                            <>
                                <Link src={formData.linkedin} style={styles.link}>LinkedIn</Link>
                                <Text style={styles.contactSeparator}>|</Text>
                            </>
                        )}
                        {formData.github && (
                            <>
                                <Link src={formData.github} style={styles.link}>GitHub</Link>
                                <Text style={styles.contactSeparator}>|</Text>
                            </>
                        )}
                        {formData.portfolio && <Link src={formData.portfolio} style={styles.link}>Portfolio</Link>}
                    </View>

                </View>
            )}

            {formData.summary && (
                <View style={styles.section}>
                    <Text style={styles.title}>Summary</Text>
                    <Text style={styles.text}>{formData.summary}</Text>
                </View>
            )}

            {formData.education?.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.title}>Education</Text>
                    {formData.education.map((edu, index) => (
                        <View key={index}>
                            <Text style={styles.subTitle}>{edu.degree} at {edu.school}</Text>
                            <View style={styles.row}>
                                <Text style={styles.text}>{edu.location}</Text>
                                <Text style={styles.date}>{edu.startDate} - {edu.endDate || "Present"}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            )}

            {formData.experience?.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.title}>Experience</Text>
                    {formData.experience.map((exp, index) => (
                        <View key={index}>
                            <Text style={styles.subTitle}>{exp.title} at {exp.company}</Text>
                            <View style={styles.row}>
                                <Text style={styles.text}>{exp.location}</Text>
                                <Text style={styles.date}>{exp.startDate} - {exp.endDate || "Present"}</Text>
                            </View>
                            <Text style={styles.text}>{exp.description}</Text>
                        </View>
                    ))}
                </View>
            )}

            {formData.projects?.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.title}>Projects</Text>
                    {formData.projects.map((proj, index) => (
                        <View key={index}>
                            <View style={styles.row}>
                                <Text style={styles.subTitle}>{proj.name}</Text>
                                {proj.link && <Link src={proj.link} style={styles.link}>{proj.link}</Link>}
                            </View>
                            <Text style={styles.text}>{proj.description}</Text>
                        </View>
                    ))}
                </View>
            )}

            {formData.skills && (
                <View style={styles.section}>
                    <Text style={styles.title}>Skills</Text>
                    <Text style={styles.text}>{formData.skills}</Text>
                </View>
            )}

            {formData.certifications?.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.title}>Certifications</Text>
                    {formData.certifications.map((cert, index) => (
                        <View key={index}>
                            <Text style={styles.subTitle}>{cert.name} by {cert.issuer}</Text>
                            <View style={styles.row}>
                                <Text style={styles.text}>Issued: {cert.issueDate || "N/A"}</Text>
                                <Text style={styles.text}>Expires: {cert.expirationDate || "No Expiry"}</Text>
                            </View>
                            {cert.credentialURL && <Link src={cert.credentialURL} style={styles.link}>{cert.credentialURL}</Link>}
                        </View>
                    ))}
                </View>
            )}
        </Page>
    </Document>
);

export default ModernResumePDF;
