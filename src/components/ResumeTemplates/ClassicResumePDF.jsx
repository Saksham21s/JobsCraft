import React from "react";
import { Page, Text, View, Document, StyleSheet, Link, Image } from "@react-pdf/renderer";
import PhoneImage from "../../assets/resume-img/phone.png";
import EmailIcon from "../../assets/resume-img/email.png";
import LinkedInIcon from "../../assets/resume-img/linkedin.png";
import GitHubIcon from "../../assets/resume-img/github.png";
import PortfolioIcon from "../../assets/resume-img/portfolio.png";

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 13,
        fontFamily: "Helvetica",
        color: "#333",
    },
    fullName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#5ca8ff",
        padding: 10,
        marginBottom: 12,
    },
    contentContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
    },
    leftColumn: {
        width: 160,
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    rightColumn: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    sectionHeader: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#1a1a1a",
        marginBottom: 6,
        textTransform: "uppercase",
        borderBottom: "1px solid #6366f1",
        paddingBottom: 4,
    },
    contactItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        color: "#3f3f46",
        marginBottom: 5,
    },
    contactLink: {
        color: "#3f3f46",
        textDecoration: "none",
        fontSize: 12,
    },
    skillItem: {
        fontSize: 12,
        color: "#3f3f46",
        backgroundColor: "#f4f4f5",
        padding: 6,
        borderRadius: 5,
        textAlign: "center",
        marginBottom: 5,
    },
    certificationItem: {
        marginBottom: 10,
    },
    certificationTitle: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#1a1a1a",
    },
    certificationSubtitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 3,
        color: "#71717a",
    },
    certificationDate: {
        fontSize: 11,
        color: "#71717a",
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#1a1a1a",
        marginBottom: 3,
    },
    itemSubtitle: {
        fontSize: 12,
        color: "#71717a",
        marginBottom: 3,
    },
    itemDate: {
        fontSize: 11,
        color: "#71717a",
        marginBottom: 3,
    },
    itemDescription: {
        fontSize: 12,
        color: "#52525b",
        lineHeight: 1.5,
        marginTop: 3,
    },
    projectRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    projectLink: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "500",
        fontSize: 12,
    },
    educationDateRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    eduGpa: {
        fontSize: 12,
        color: "#71717a",
        fontWeight: "bold",
        marginBottom: 4,
    },
    dot: {
        fontSize: 13,
        color: "#6366f1",
        marginRight: 4,
    },
    icon: {
        fontSize: 13,
        color: "#6366f1",
        marginRight: 4,
    },
});

const ModernResumePDF = ({ formData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Full Name at the Top */}
            {formData.fullName && (
                <View style={styles.fullName}>
                    <Text>{formData.fullName}</Text>
                </View>
            )}

            {/* Content Container */}
            <View style={styles.contentContainer}>
                {/* Left Column */}
                <View style={styles.leftColumn}>
                    {/* Contact Section */}
                    <View>
                        <Text style={styles.sectionHeader}>Contact</Text>

                        {formData.phone && (
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                                <Image src={PhoneImage} style={{ width: 12, height: 12, marginRight: 6 }} />
                                <Text>{formData.phone}</Text>
                            </View>
                        )}

                        {formData.email && (
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                                <Image src={EmailIcon} style={{ width: 12, height: 12, marginRight: 6 }} />
                                <Link src={`mailto:${formData.email}`} style={styles.contactLink}>
                                    {formData.email}
                                </Link>
                            </View>
                        )}

                        {formData.linkedin && (
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                                <Image src={LinkedInIcon} style={{ width: 12, height: 12, marginRight: 6 }} />
                                <Link
                                    src={formData.linkedin.startsWith("https://") ? formData.linkedin : `https://${formData.linkedin}`}
                                    style={styles.contactLink}
                                >
                                    LinkedIn
                                </Link>
                            </View>
                        )}

                        {formData.github && (
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                                <Image src={GitHubIcon} style={{ width: 12, height: 12, marginRight: 6 }} />
                                <Link
                                    src={formData.github.startsWith("https://") ? formData.github : `https://${formData.github}`}
                                    style={styles.contactLink}
                                >
                                    GitHub
                                </Link>
                            </View>
                        )}

                        {formData.portfolio && (
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                                <Image src={PortfolioIcon} style={{ width: 12, height: 12, marginRight: 6 }} />
                                <Link
                                    src={formData.portfolio.startsWith("https://") ? formData.portfolio : `https://${formData.portfolio}`}
                                    style={styles.contactLink}
                                >
                                    Portfolio
                                </Link>
                            </View>
                        )}
                    </View>

                    {/* Skills Section */}
                    {formData?.skills && (
                        <View>
                            <Text style={styles.sectionHeader}>Skills</Text>
                            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
                                {formData.skills.split(",").map((skill, index) => (
                                    <Text key={index} style={styles.skillItem}>
                                        {skill.trim()}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    )}

                    {/* Education Section */}
                    {formData?.education?.length > 0 && (
                        <View>
                            <Text style={styles.sectionHeader}>Education</Text>
                            {formData.education.map((edu, index) => (
                                <View key={index} style={{ marginBottom: 8 }}>
                                    <Text style={styles.itemTitle}>
                                        <Text style={styles.dot}>•</Text> {edu.degree}
                                    </Text>

                                    <Text style={styles.eduGpa}>
                                        at {edu.school}, {edu.location}
                                    </Text>

                                    {edu.gpa && (
                                        <Text style={styles.eduGpa}>
                                            GPA: {edu.gpa}
                                        </Text>
                                    )}

                                    <Text style={styles.itemDate}>
                                        {edu.startDate} - {edu.endDate || "Present"}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Certifications Section */}
                    {formData?.certifications?.length > 0 && (
                        <View>
                            <Text style={styles.sectionHeader}>Certifications</Text>
                            {formData.certifications.map((cert, index) => (
                                <View key={index} style={styles.certificationItem}>

                                    {/* Certification Name */}
                                    <Text style={styles.certificationTitle}>
                                        <Text style={styles.dot}>•</Text> {cert.name}
                                    </Text>

                                    {/* Issuer */}
                                    <Text style={styles.certificationSubtitle}>{cert.issuer}</Text>

                                    {/* Credential ID and URL */}
                                    {cert.credential && (
                                        <Text style={styles.credentialInfo}>
                                            ID - {cert.credential}{" "}
                                            {cert.link && (
                                                <Text style={styles.credentialLink}>
                                                    (<Text style={{ textDecoration: "underline" }}>{cert.link}</Text>)
                                                </Text>
                                            )}
                                        </Text>
                                    )}

                                    {/* Certification Date */}
                                    <Text style={styles.certificationDate}>
                                        {cert.issueDate} - {cert.expirationDate || "No Expiry"}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                {/* Right Column */}
                <View style={styles.rightColumn}>
                    {/* Summary Section */}
                    {formData?.summary && (
                        <View>
                            <Text style={styles.sectionHeader}>Summary</Text>
                            <Text style={styles.itemDescription}>{formData.summary}</Text>
                        </View>
                    )}

                    {/* Experience Section */}
                    {formData?.experience?.length > 0 && (
                        <View>
                            <Text style={styles.sectionHeader}>Experience</Text>
                            {formData.experience.map((exp, index) => (
                                <View key={index} style={{ marginBottom: 8 }}>
                                    <Text style={styles.itemTitle}>
                                        <Text style={styles.dot}>•</Text> {exp.title} <Text style={styles.atText}>at</Text> {exp.company}
                                    </Text>

                                    <Text style={styles.itemDate}>
                                        {exp.startDate} - {exp.endDate || "Present"}
                                    </Text>
                                    <Text style={styles.itemDescription}>{exp.description}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Projects Section */}
                    {formData?.projects?.length > 0 && (
                        <View>
                            <Text style={styles.sectionHeader}>Projects</Text>
                            {formData.projects.map((proj, index) => (
                                <View key={index} style={{ marginBottom: 8 }}>
                                    {/* Project Name and Link in the same row */}
                                    <View style={styles.projectRow}>
                                        <Text style={styles.itemTitle}>
                                            <Text style={styles.dot}>•</Text> {proj.name}
                                        </Text>
                                        {proj.link && (
                                            <Link src={proj.link} style={styles.projectLink}>
                                                View Project
                                            </Link>
                                        )}
                                    </View>

                                    {/* Project Description */}
                                    <Text style={styles.itemDescription}>{proj.description}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        </Page>
    </Document>
);

export default ModernResumePDF;