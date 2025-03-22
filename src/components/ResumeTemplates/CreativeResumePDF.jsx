import React from "react";
import { Page, Text, View, Document, StyleSheet, Link, Svg, Path } from "@react-pdf/renderer";

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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
        fontFamily: "Times-Bold",
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
        flexDirection: "row",
        alignItems: "center", // Centers text and icon vertically
        gap: 3,
    },
    separator: {
        marginLeft: 4,
        marginRight: 4,
    },
    svgIcon: {
        width: 12,
        height: 12,
        marginRight: 4,
    },
    title: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "Helvetica-Bold",
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
});

const Icon = ({ d }) => (
    <Svg style={styles.svgIcon} viewBox="0 0 24 24">
        <Path d={d} fill="#222" />
    </Svg>
);

const CreativeResumePDF = ({ formData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {(formData?.fullName || formData?.phone || formData?.email || formData?.linkedin || formData?.github || formData?.portfolio) && (
                <View style={styles.header}>
                    {formData.fullName && <Text style={styles.name}>{formData.fullName}</Text>}
                    <View style={styles.contact}>
                        {formData.phone && (
                            <View style={styles.contactItem}>
                                <Icon d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.85-.27c.9.16 1.85.25 2.74.25a1 1 0 011 1v3.55a1 1 0 01-1 1A16.92 16.92 0 013.07 3.07a1 1 0 011-1H7.7a1 1 0 011 1c0 .89.09 1.84.25 2.74a1 1 0 01-.27.85l-2.2 2.2z" />
                                <Text>{formData.phone}</Text>
                            </View>
                        )}
                        {formData.email && (
                            <>
                                <Text style={styles.separator}>|</Text>
                                <View style={styles.contactItem}>
                                    <Icon d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                                    <Text>{formData.email}</Text>
                                </View>
                            </>
                        )}
                        {formData.linkedin && (
                            <>
                                <Text style={styles.separator}>|</Text>
                                <View style={styles.contactItem}><Link src={formData.linkedin} style={styles.headerLink}>LinkedIn</Link>
                                </View>
                            </>
                        )}
                        {formData.github && (
                            <>
                                <Text style={styles.separator}>|</Text>
                                <View style={styles.contactItem}><Link src={formData.github} style={styles.headerLink}>GitHub</Link>
                                </View>
                            </>
                        )}
                        {formData.portfolio && (
                            <>
                                <Text style={styles.separator}>|</Text>
                                <View style={[styles.iconLinkContainer, { flexDirection: 'row', alignItems: 'center' }]}>
                                    <Link src={formData.portfolio} style={styles.headerLink}>Portfolio</Link>
                                </View>
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
                     <Text style={styles.text}>{formData.skills}</Text>
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
            {formData?.certifications?.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.title}>CERTIFICATIONS</Text>
                    {formData.certifications.map((cert, index) => (
                        <View key={index} style={styles.entry}>
                            <Text style={styles.certTitle}>
                                {cert.name} by {cert.issuer}
                            </Text>
                            <View style={styles.row}>
                                <View style={styles.credentialDetails}>
                                    <Text style={styles.credentialText}>
                                        ID: {cert.credentialID}
                                    </Text>
                                    <Text>( {cert.credentialURL && (
                                        <Link src={cert.credentialURL} style={styles.link}>
                                            Verify Certificate
                                        </Link>
                                    )} )</Text>
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
