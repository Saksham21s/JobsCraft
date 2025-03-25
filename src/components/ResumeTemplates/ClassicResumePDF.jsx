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
        color: "#2d3748",
    },
    fullName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        backgroundColor: "#333",
        padding: 15,
        marginBottom: 12,
        textTransform: "uppercase",
        letterSpacing: 2,
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
        color: "#222",
        marginBottom: 6,
        textTransform: "uppercase",
        borderBottom: "1px solid #3b82f6",
        paddingBottom: 4,
    },
    contactItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        color: "#4b5563",
        marginBottom: 5,
    },
    contactLink: {
        color: "#4b5563",
        textDecoration: "none",
        fontSize: 12,
    },
    skillItem: {
        fontSize: 12,
        color: "#2563eb",
        backgroundColor: "#eff6ff",
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
        color: "#222",
    },
    certificationSubtitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 3,
        marginLeft:10,
        color: "#4b5563",
    },
    certificationDate: {
        fontSize: 10,
        color: "#6b7280",
        fontFamily: "Helvetica",
        fontStyle: "italic",
        marginLeft:7,
    },
    itemTitle: {
        fontSize: 14,
        fontWeight:700,
        color:"#222",
        marginBottom: 3,
    },
    itemSubtitle: {
        fontSize: 12,
        color: "#4b5563",
        marginBottom: 3,
        marginLeft:7,
    },
    itemDate: {
        fontSize: 10,
        color: "#6b7280",
        fontFamily: "Helvetica",
        fontStyle: "italic",
        marginLeft:7,
    },
    itemDescription: {
        fontSize: 12,
        color: "#4b5563",
        lineHeight: 1.5,
        marginTop: 3,
        marginLeft:7,
    },
    projectRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    projectLink: {
        color: "#2563eb",
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
        fontSize: 10,
        color: "#333;",
        fontWeight: "bold",
        marginBottom: 4,
        marginLeft:7,
    },
    dot: {
        fontSize: 13,
        color: "#2563eb",
        marginRight: 4,
    },
    icon: {
        fontSize: 13,
        color: "#2563eb",
        marginRight: 4,
    },
});

const ModernResumePDF = ({ formData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Full Name at the Top */}
            {formData.fullName && formData.fullName.trim() && (
                <View style={styles.fullName}>
                    <Text>{formData.fullName.toUpperCase()}</Text>
                </View>
            )}

            {/* Content Container */}
            <View style={styles.contentContainer}>
                {/* Left Column */}
                <View style={styles.leftColumn}>
                    {/* Contact Section */}
                    {(formData.phone || formData.email || formData.linkedin || formData.github || formData.portfolio) && (
                        <View>
                            <Text style={styles.sectionHeader}>Contact</Text>

                            {formData.phone && formData.phone.trim() && (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                                    <Image src={PhoneImage} style={{ width: 12, height: 12, marginRight: 6 }} />
                                    <Text>{formData.phone}</Text>
                                </View>
                            )}

                            {formData.email && formData.email.trim() && (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                                    <Image src={EmailIcon} style={{ width: 12, height: 12, marginRight: 6 }} />
                                    <Link src={`mailto:${formData.email}`} style={styles.contactLink}>
                                        {formData.email}
                                    </Link>
                                </View>
                            )}

                            {formData.linkedin && formData.linkedin.trim() && (
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

                            {formData.github && formData.github.trim() && (
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

                            {formData.portfolio && formData.portfolio.trim() && (
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
                    )}

                    {/* Skills Section */}
                    {formData?.skills && formData.skills.trim() && (
                        <View>
                            <Text style={styles.sectionHeader}>Skills</Text>
                            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
                                {formData.skills.split(",")
                                    .filter(skill => skill.trim())
                                    .map((skill, index) => (
                                        <Text key={index} style={styles.skillItem}>
                                            {skill.trim()}
                                        </Text>
                                    ))}
                            </View>
                        </View>
                    )}

                    {/* Education Section */}
                    {formData?.education?.length > 0 && formData.education.some(edu => edu.degree || edu.school) && (
                        <View>
                            <Text style={styles.sectionHeader}>Education</Text>
                            {formData.education.map((edu, index) => (
                                edu.degree || edu.school ? (
                                    <View key={index} style={{ marginBottom: 8 }}>
                                        {edu.degree && (
                                            <Text style={styles.itemTitle}>
                                                <Text style={styles.dot}>• </Text> {edu.degree}
                                            </Text>
                                        )}
                                        {edu.school && (
                                            <Text style={styles.itemSubtitle}>
                                                {edu.school}{edu.location ? `, ${edu.location}` : ''}
                                            </Text>
                                        )}
                                        {edu.gpa && <Text style={styles.eduGpa}>GPA: {edu.gpa}</Text>}
                                        {(edu.startDate || edu.endDate) && (
                                            <Text style={styles.itemDate}>
                                                {edu.startDate} - {edu.endDate || "Present"}
                                            </Text>
                                        )}
                                    </View>
                                ) : null
                            ))}
                        </View>
                    )}

                    {/* Certifications Section */}
                    {formData?.certifications?.length > 0 && formData.certifications.some(cert => cert.name || cert.issuer) && (
                        <View>
                            <Text style={styles.sectionHeader}>Certifications</Text>
                            {formData.certifications.map((cert, index) => (
                                cert.name || cert.issuer ? (
                                    <View key={index} style={styles.certificationItem}>
                                        {cert.name && (
                                            <Text style={styles.certificationTitle}>
                                                <Text style={styles.dot}>• </Text> {cert.name}
                                            </Text>
                                        )}
                                        {cert.issuer && (
                                            <Text style={styles.certificationSubtitle}>{cert.issuer}</Text>
                                        )}
                                        {cert.credential && (
                                            <Text style={styles.credentialInfo}>
                                                ID - {cert.credential}
                                                {cert.link && (
                                                    <Text style={styles.credentialLink}>
                                                        (<Text style={{ textDecoration: "underline" }}>{cert.link}</Text>)
                                                    </Text>
                                                )}
                                            </Text>
                                        )}
                                        {(cert.issueDate || cert.expirationDate) && (
                                            <Text style={styles.certificationDate}>
                                                {cert.issueDate} - {cert.expirationDate || "No Expiry"}
                                            </Text>
                                        )}
                                    </View>
                                ) : null
                            ))}
                        </View>
                    )}
                </View>

                {/* Right Column */}
                <View style={styles.rightColumn}>
                    {/* Summary Section */}
                    {formData?.summary && formData.summary.trim() && (
                        <View>
                            <Text style={styles.sectionHeader}>Summary</Text>
                            <Text style={styles.itemDescription}>{formData.summary}</Text>
                        </View>
                    )}

                    {/* Experience Section */}
                    {formData?.experience?.length > 0 && formData.experience.some(exp => exp.title || exp.company) && (
                        <View>
                            <Text style={styles.sectionHeader}>Experience</Text>
                            {formData.experience.map((exp, index) => (
                                exp.title || exp.company ? (
                                    <View key={index} style={{ marginBottom: 8 }}>
                                        {(exp.title || exp.company) && (
                                            <Text style={styles.itemTitle}>
                                                <Text style={styles.dot}>• </Text> 
                                                {exp.title} 
                                                {exp.company && <Text style={styles.atText}> at {exp.company}</Text>}
                                            </Text>
                                        )}
                                        {(exp.startDate || exp.endDate) && (
                                            <Text style={styles.itemDate}>
                                                {exp.startDate} - {exp.endDate || "Present"}
                                            </Text>
                                        )}
                                        {exp.description && (
                                            <Text style={styles.itemDescription}>{exp.description}</Text>
                                        )}
                                    </View>
                                ) : null
                            ))}
                        </View>
                    )}

                    {/* Projects Section */}
                    {formData?.projects?.length > 0 && formData.projects.some(proj => proj.name || proj.description) && (
                        <View>
                            <Text style={styles.sectionHeader}>Projects</Text>
                            {formData.projects.map((proj, index) => (
                                proj.name || proj.description ? (
                                    <View key={index} style={{ marginBottom: 8 }}>
                                        <View style={styles.projectRow}>
                                            {proj.name && (
                                                <Text style={styles.itemTitle}>
                                                    <Text style={styles.dot}>• </Text> {proj.name}
                                                </Text>
                                            )}
                                            {proj.link && (
                                                <Link src={proj.link} style={styles.projectLink}>
                                                    View Project
                                                </Link>
                                            )}
                                        </View>
                                        {proj.description && (
                                            <Text style={styles.itemDescription}>{proj.description}</Text>
                                        )}
                                    </View>
                                ) : null
                            ))}
                        </View>
                    )}
                </View>
            </View>
        </Page>
    </Document>
);

export default ModernResumePDF;
