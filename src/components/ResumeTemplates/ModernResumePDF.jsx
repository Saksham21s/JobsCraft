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
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  header: {
    textAlign: "center",
    marginBottom: 15,
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
    borderBottom: "1.5px solid #94a3b8",
    paddingBottom: 4,
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
      {(formData?.fullName ||
        formData?.phone ||
        formData?.email ||
        formData?.linkedin ||
        formData?.github ||
        formData?.portfolio) && (
          <View style={styles.header}>
            {formData.fullName && (
              <Text style={styles.name}>{formData.fullName}</Text>
            )}
            <View style={styles.contact}>
              {formData.phone && (
                <Text style={styles.contactItem}>{formData.phone}</Text>
              )}
              {formData.email && (
                <>
                  <Text style={styles.separator}>|</Text>
                  <Text style={styles.contactItem}>{formData.email}</Text>
                </>
              )}
              {formData.linkedin && (
                <>
                  <Text style={styles.separator}>|</Text>
                  <Link src={formData.linkedin} style={styles.headerLink}>
                    {"LinkedIn"}
                  </Link>
                </>
              )}
              {formData.github && (
                <>
                  <Text style={styles.separator}>|</Text>
                  <Link src={formData.github} style={styles.headerLink}>
                    {"GitHub"}
                  </Link>
                </>
              )}
              {formData.portfolio && (
                <>
                  <Text style={styles.separator}>|</Text>
                  <Link src={formData.portfolio} style={styles.headerLink}>
                    {"Portfolio"}
                  </Link>
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

      {/* Education Section */}
      {formData?.education?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>EDUCATION</Text>
          {formData.education.map((edu, index) => (
            <View key={index} style={styles.entry}>
              <Text style={styles.entryTitle}>
              <Text style={styles.dot}>•</Text> {edu.degree} at {edu.school}, {edu.location}
              </Text>
              <View style={styles.row}>
                <Text style={styles.gpa}>GPA - {edu.gpa}</Text>
                <Text style={styles.date}>
                  {edu.startDate} - {edu.endDate || "Present"}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Experience Section */}
      {formData?.experience?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>EXPEREINCE</Text>
          {formData.experience.map((exp, index) => (
            <View key={index} style={styles.entry}>
              <Text style={styles.entryTitle}>
              <Text style={styles.dot}>•</Text> {exp.title} at {exp.company}
              </Text>
              <View style={styles.row}>
                <Text style={styles.date}>Location - {exp.location}</Text>
                <Text style={styles.date}>
                  {exp.startDate} - {exp.endDate || "Present"}
                </Text>
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
              <View style={styles.row}>
                <Text style={styles.entryTitle}><Text style={styles.dot}>•</Text> {proj.name}</Text>
                <Text style={styles.gpa}>
                  {" "}
                  <Text style={styles.linkLabel}>Link: </Text>
                  <Text style={styles.linkUrl}>{proj.link}</Text>
                </Text>
              </View>
              <Text style={styles.text}>{proj.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Skills Section */}
      {formData?.skills && (
        <View style={styles.section}>
          <Text style={styles.title}>SKILLS</Text>
          <Text style={styles.skillstext}>{formData.skills}</Text>
        </View>
      )}

      {/* Certifications Section */}
      {formData?.certifications?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>CERTIFICATIONS</Text>
          {formData.certifications.map((cert, index) => (
            <View key={index} style={styles.entry}>
              <Text style={styles.certTitle}>
              <Text style={styles.dot}>•</Text> {cert.name} by {cert.issuer}
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
                <View style={styles.date}>
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

export default ModernResumePDF;
