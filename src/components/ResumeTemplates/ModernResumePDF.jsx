import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12,
    color: "#2d3748",
  },
  section: {
    paddingBottom: 9,
    borderBottom:" 2px solid #f0f0f0;"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  header: {
    textAlign: "center",
     paddingBottom: 9,
    borderBottom:" 2px solid #f0f0f0;"
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom: 6,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  headerLink: {
    fontSize: 11,
    color: "#4b5563",
    textDecoration: "none",
    marginRight: 10,
    marginLeft: 10,
  },
  headerLinkHover: {
    color: "#0073e6",
  },
  contact: {
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 11,
    color: "#4b5563",
    flexWrap: "wrap",
  },
  contactItem: {
    marginRight: 10,
    marginLeft: 10,
  },
  contactItemLast: {
    marginRight: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    borderBottom: "2px solid #94a3b8",
    paddingBottom: 4,
    paddingTop: 6,
    marginBottom: 10,
    color: "#111827",
  },
  text: {
    fontSize: 11,
    color: "#4b5563",
    lineHeight: 1.5,
    marginLeft: 12,
  },
  skillstext: {
    fontSize: 11,
    color: "#2d3748",
    lineHeight: 1.5,
    marginLeft: 12,
    marginBottom: 6,
  },
  entry: {
    marginBottom: 8,
  },
  entryTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: 4,
  },
  date: {
    fontSize: 10,
    color: "#6b7280",
    fontFamily: "Helvetica-Oblique",
    textAlign: "right",
    marginBottom: 4,
    marginLeft: 12,
  },
  location: {
    fontSize: 10,
    color: "#6b7280",
    fontFamily: "Helvetica-Oblique",
  },
  gpa: {
    fontSize: 10,
    color: "#2563eb",
    textAlign: "right",
    marginBottom: 4,
    fontWeight: "bold",
    marginLeft: 12,
  },
  link: {
    fontSize: 11,
    textDecoration: "none",
  },
  linkHover: {
    textDecoration: "underline",
    color: "#0073e6",
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  certItem: {
    marginBottom: 8,
  },
  certTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2d3748",
  },
  credentialDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    fontSize: 12,
    color: "#666",
  },
  credentialText: {
    fontSize: 12,
    fontWeight: "500",
  },
  linkLabel: {
    color: "#111827",
    fontWeight: "medium",
  },
  linkUrl: {
    color: "#2563eb",
  },
});

const ModernResumePDF = ({ formData }) => (
  <Document>
    <Page size={[600, 900]} style={styles.page}>
      {/* Header Section */}
      {(formData?.fullName?.trim() ||
        formData?.phone?.trim() ||
        formData?.email?.trim() ||
        formData?.linkedin?.trim() ||
        formData?.github?.trim() ||
        formData?.portfolio?.trim()) && (
        <View style={styles.header}>
          {formData.fullName && formData.fullName.trim() && (
            <Text style={styles.name}>{formData.fullName}</Text>
          )}
          <View style={styles.contact}>
            {formData.phone && formData.phone.trim() && (
              <Text style={styles.contactItem}>{formData.phone}</Text>
            )}
            {formData.email && formData.email.trim() && (
              <>
                {formData.phone && <Text style={styles.separator}>|</Text>}
                <Text style={styles.contactItem}>{formData.email}</Text>
              </>
            )}
            {formData.linkedin && formData.linkedin.trim() && (
              <>
                {(formData.phone || formData.email) && (
                  <Text style={styles.separator}>|</Text>
                )}
                <Link src={formData.linkedin} style={styles.headerLink}>
                  {"LinkedIn"}
                </Link>
              </>
            )}
            {formData.github && formData.github.trim() && (
              <>
                {(formData.phone || formData.email || formData.linkedin) && (
                  <Text style={styles.separator}>|</Text>
                )}
                <Link src={formData.github} style={styles.headerLink}>
                  {"GitHub"}
                </Link>
              </>
            )}
            {formData.portfolio && formData.portfolio.trim() && (
              <>
                {(formData.phone || formData.email || formData.linkedin || formData.github) && (
                  <Text style={styles.separator}>|</Text>
                )}
                <Link src={formData.portfolio} style={styles.headerLink}>
                  {"Portfolio"}
                </Link>
              </>
            )}
          </View>
        </View>
      )}

      {/* Summary Section */}
      {formData?.summary && formData.summary.trim() && (
        <View style={styles.section}>
          <Text style={styles.title}>SUMMARY</Text>
          <Text style={styles.text}>{formData.summary}</Text>
        </View>
      )}

      {/* Education Section */}
      {formData?.education?.length > 0 && formData.education.some(edu => edu.degree || edu.school) && (
        <View style={styles.section}>
          <Text style={styles.title}>EDUCATION</Text>
          {formData.education.map((edu, index) => (
            edu.degree || edu.school ? (
              <View key={index} style={styles.entry}>
                <Text style={styles.entryTitle}>
                  <Text style={styles.dot}>• </Text> 
                  {edu.degree}
                  {edu.school && ` at ${edu.school}`}
                  {edu.location && `, ${edu.location}`}
                </Text>
                <View style={styles.row}>
                  {edu.gpa && <Text style={styles.gpa}>GPA - {edu.gpa}</Text>}
                  {(edu.startDate || edu.endDate) && (
                    <Text style={styles.date}>
                      {edu.startDate} - {edu.endDate || "Present"}
                    </Text>
                  )}
                </View>
              </View>
            ) : null
          ))}
        </View>
      )}

      {/* Experience Section */}
      {formData?.experience?.length > 0 && formData.experience.some(exp => exp.title || exp.company) && (
        <View style={styles.section}>
          <Text style={styles.title}>EXPERIENCE</Text>
          {formData.experience.map((exp, index) => (
            exp.title || exp.company ? (
              <View key={index} style={styles.entry}>
                <Text style={styles.entryTitle}>
                  <Text style={styles.dot}>• </Text> 
                  {exp.title}
                  {exp.company && ` at ${exp.company}`}
                </Text>
                <View style={styles.row}>
                  {exp.location && (
                    <Text style={styles.date}>Location - {exp.location}</Text>
                  )}
                  {(exp.startDate || exp.endDate) && (
                    <Text style={styles.date}>
                      {exp.startDate} - {exp.endDate || "Present"}
                    </Text>
                  )}
                </View>
                {exp.description && <Text style={styles.text}>{exp.description}</Text>}
              </View>
            ) : null
          ))}
        </View>
      )}

      {/* Projects Section */}
      {formData?.projects?.length > 0 && formData.projects.some(proj => proj.name || proj.description) && (
        <View style={styles.section}>
          <Text style={styles.title}>PROJECTS</Text>
          {formData.projects.map((proj, index) => (
            proj.name || proj.description ? (
              <View key={index} style={styles.entry}>
                <View style={styles.row}>
                  {proj.name && (
                    <Text style={styles.entryTitle}>
                      <Text style={styles.dot}>•</Text> {proj.name}
                    </Text>
                  )}
                  {proj.link && proj.link.trim() && (
                    <Text style={styles.gpa}>
                      <Text style={styles.linkLabel}>Link: </Text>
                      <Text style={styles.linkUrl}>{proj.link}</Text>
                    </Text>
                  )}
                </View>
                {proj.description && <Text style={styles.text}>{proj.description}</Text>}
              </View>
            ) : null
          ))}
        </View>
      )}

      {/* Skills Section */}
      {formData?.skills && formData.skills.trim() && (
        <View style={styles.section}>
          <Text style={styles.title}>SKILLS</Text>
          <Text style={styles.skillstext}>
            {formData.skills.split(',')
              .filter(skill => skill.trim())
              .join(', ')}
          </Text>
        </View>
      )}

      {/* Certifications Section */}
      {formData?.certifications?.length > 0 && formData.certifications.some(cert => cert.name || cert.issuer) && (
        <View style={styles.section}>
          <Text style={styles.title}>CERTIFICATIONS</Text>
          {formData.certifications.map((cert, index) => (
            cert.name || cert.issuer ? (
              <View key={index} style={styles.entry}>
                {(cert.name || cert.issuer) && (
                  <Text style={styles.certTitle}>
                    <Text style={styles.dot}>•</Text> 
                    {cert.name}
                    {cert.issuer && ` by ${cert.issuer}`}
                  </Text>
                )}
                <View style={styles.row}>
                  {(cert.credentialID || cert.credentialURL) && (
                    <View style={styles.credentialDetails}>
                      {cert.credentialID && (
                        <Text style={styles.credentialText}>
                          ID: {cert.credentialID}
                        </Text>
                      )}
                      {cert.credentialURL && (
                        <Text>
                          ({" "}
                          <Link src={cert.credentialURL} style={styles.link}>
                            Verify Certificate
                          </Link>{" "}
                          )
                        </Text>
                      )}
                    </View>
                  )}
                  {(cert.issueDate || cert.expirationDate) && (
                    <View style={styles.date}>
                      {cert.issueDate && <Text>Issued: {cert.issueDate}</Text>}
                      {cert.expirationDate && <Text>Expires: {cert.expirationDate}</Text>}
                    </View>
                  )}
                </View>
              </View>
            ) : null
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default ModernResumePDF;
