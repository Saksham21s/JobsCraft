import React from "react";
import { Page, Text, View, Document, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: "Helvetica",
        fontSize: 12,
        color: "#000",
    },
    section: {
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 3,
    },
    header: {
        textAlign: "center",
        marginBottom: 15,
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'Times-Bold',
        color: "#111",
        marginBottom: 5,
        letterSpacing: 1,
    },
    headerLink: {
        fontSize: 10,
        color: "#111",
        textDecoration: "none",
        marginRight: 8,
        marginLeft: 8,
    },
    contact: {
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 10,
        color: "#111",
        flexWrap: "wrap",
    },
    contactItem: {
        marginRight: 8,
        marginLeft: 8,
    },
    separator: {
        marginLeft: 4,
        marginRight: 4,
    },
    title: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'Helvetica-Bold',
        backgroundColor: "#f0f0f0",
        color: "#111",
        textAlign: "center",
        marginBottom: 8,
        padding: 5,
        borderRadius: 3,
    },
    text: {
        fontSize: 10,
        color: "#666",
        lineHeight: 1.4,
        fontWeight: 500,
        marginLeft: 5,
    },
    entry: {
        marginBottom: 8,
    },
    entryTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: "#222",
        marginBottom: 4,
    },
    date: {
        fontSize: 10,
        color: "#666",
        textAlign: "right",
        marginBottom: 4,
    },
    gpa: {
        fontSize: 10,
        color: "#666",
        textAlign: "left",
        marginBottom: 4, 
    },
    link: {
        fontSize: 10,
        color: "#3498db",
        textDecoration: "none",
    },
    projectHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    certItem: {
        marginBottom: 8,
    },
    certTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 5,
    },
    certDate: {
        fontSize: 10,
        fontWeight: "600",
        color: "#666",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
    },
    credentialDetails: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        fontSize: 10,
        color: "#666",
    },
    credentialText: {
        fontSize: 10,
        fontWeight: "600",
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginLeft: 5,
    },
    skillItem: {
        backgroundColor: "#e0e0e0",
        padding: "4 8",
        borderRadius: 3,
        fontSize: 9,
        color: "#111",
        marginBottom: 5,
    },
});

const CreativeResumePDF = ({ formData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header Section */}
            {(formData?.fullName || formData?.phone || formData?.email || formData?.linkedin || formData?.github || formData?.portfolio) && (
                <View style={styles.header}>
                    {formData.fullName && <Text style={styles.name}>{formData.fullName}</Text>}
                    <View style={styles.contact}>
                        {formData.phone && <Text style={styles.contactItem}>{formData.phone}</Text>}
                        {formData.email && (
                            <>
                                <Text style={styles.separator}>|</Text>
                                <Text style={styles.contactItem}>{formData.email}</Text>
                            </>
                        )}
                        {formData.linkedin && (
                            <>
                                <Text style={styles.separator}>|</Text>
                                <Link src={formData.linkedin} style={styles.headerLink}>LinkedIn</Link>
                            </>
                        )}
                        {formData.github && (
                            <>
                                <Text style={styles.separator}>|</Text>
                                <Link src={formData.github} style={styles.headerLink}>GitHub</Link>
                            </>
                        )}
                        {formData.portfolio && (
                            <>
                                <Text style={styles.separator}>|</Text>
                                <Link src={formData.portfolio} style={styles.headerLink}>Portfolio</Link>
                            </>
                        )}
                    </View>
                </View>
            )}

            {/* Summary Section */}
            {formData?.summary && (
                <View style={styles.section}>
                    <Text style={styles.title}>SUMMARY</Text>
                    <Text style={styles.text}>{formData.summary}</Text>
                </View>
            )}

            {/* Skills Section */}
            {formData?.skills && (
                <View style={styles.section}>
                    <Text style={styles.title}>SKILLS</Text>
                    <View style={styles.skillsContainer}>
                        {formData.skills.split(',').map((skill, index) => (
                            <Text key={index} style={styles.skillItem}>{skill.trim()}</Text>
                        ))}
                    </View>
                </View>
            )}

            {/* Education Section */}
            {formData?.education?.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.title}>EDUCATION</Text>
                    {formData.education.map((edu, index) => (
                        <View key={index} style={styles.entry}>
                            <Text style={styles.entryTitle}>{edu.degree} at {edu.school}, {edu.location}</Text>
                            <View style={styles.row}>
                                <Text style={styles.gpa}>GPA: {edu.gpa}</Text>
                                <Text style={styles.date}>{edu.startDate} - {edu.endDate || "Present"}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            )}

            {/* Experience Section */}
            {formData?.experience?.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.title}>EXPERIENCE</Text>
                    {formData.experience.map((exp, index) => (
                        <View key={index} style={styles.entry}>
                            <Text style={styles.entryTitle}>{exp.title} at {exp.company}</Text>
                            <View style={styles.row}>
                                <Text style={styles.gpa}>Location: {exp.location}</Text>
                                <Text style={styles.date}>{exp.startDate} - {exp.endDate || "Present"}</Text>
                            </View>
                            <Text style={styles.text}>{exp.description}</Text>
                        </View>
                    ))}
                </View>
            )}

            {/* Projects Section */}
            {formData?.projects?.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.title}>PROJECTS</Text>
                    {formData.projects.map((proj, index) => (
                        <View key={index} style={styles.entry}>
                            <View style={styles.projectHeader}>
                                <Text style={styles.entryTitle}>{proj.name}</Text>
                                {proj.link && (
                                    <Link src={proj.link} style={styles.link}>
                                        View Project
                                    </Link>
                                )}
                            </View>
                            <Text style={styles.text}>{proj.description}</Text>
                        </View>
                    ))}
                </View>
            )}

            {/* Certifications Section */}
            {formData?.certifications?.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.title}>CERTIFICATIONS</Text>
                    {formData.certifications.map((cert, index) => (
                        <View key={index} style={styles.entry}>
                            <Text style={styles.certTitle}>{cert.name} by {cert.issuer}</Text>
                            <View style={styles.row}>
                                <View style={styles.credentialDetails}>
                                    <Text style={styles.credentialText}>
                                        ID: {cert.credentialID}
                                    </Text>
                                    {cert.credentialURL && (
                                        <Link src={cert.credentialURL} style={styles.link}>
                                            Verify
                                        </Link>
                                    )}
                                </View>
                                <View style={styles.certDate}>
                                    <Text>Issued: {cert.issueDate}</Text>
                                    {cert.expirationDate && <Text>Expires: {cert.expirationDate}</Text>}
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            )}
        </Page>
    </Document>
);

export default CreativeResumePDF;
