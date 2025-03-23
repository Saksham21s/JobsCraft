import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Svg,
  Path,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontFamily: "Helvetica",
    fontSize: 12,
    color: "#1f2937",
    backgroundColor: "#ffffff",
  },
  section: {
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#f9fafb",
    borderBottom: "2px solid #e5e7eb",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom: 8,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  contact: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    marginTop:5,
    paddingHorizontal: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 11,
    color: "#4b5563",
    gap: 5,
  },
  headerLink: {
    fontSize: 11,
    color: "#4b5563",
    textDecoration: "none",
    fontWeight: "medium",
  },
  separator: {
    color: "#9ca3af",
    marginHorizontal: 2,
  },
  svgIcon: {
    width: 13,
    height: 13,
    color: "#4b5563",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    padding:5,
    marginBottom:5,
    borderBottom: "1.5px solid #e5e7eb",
    textAlign:"center",
    backgroundColor: "#f9fafb",
    borderRadius: 3,
  },
  entryTitle: {
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom:2,
  },
  subTitle: {
    fontSize: 12,
    color: "#374151",
    fontWeight: "medium",
    marginBottom: 3,
  },
  text: {
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#4b5563",
    lineHeight: 1.6,
    marginLeft: 8,
    marginTop:3,
    textAlign: "justify",
  },
  projectLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontSize: 11,
    fontWeight: "medium",
  },
  certLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontSize: 11,
    fontWeight: "medium",
  },
  date: {
    fontSize: 10,
    color: "#6b7280",
    fontFamily: "Helvetica",
    fontStyle: "italic",
  },
  location: {
    fontSize: 10,
    color: "#6b7280",
    fontFamily: "Helvetica",
    fontStyle: "italic",
  },
  bullet: {
    color: "#9ca3af",
    marginRight: 5,
    fontSize: 12,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginLeft: 8,
    marginTop: 4,
  },
  skillItem: {
    backgroundColor: "#f3f4f6",
    padding: "4 8",
    borderRadius: 3,
    fontSize: 11,
    color: "#374151",
  },
  experienceEntry: {
    marginBottom: 10,
    paddingLeft: 8,
    borderLeft: "2px solid #f3f4f6",
  },
  projectEntry: {
    marginBottom: 12,
    padding: "8 10",
    backgroundColor: "#f9fafb",
    borderRadius: 3,
  },
  certificationEntry: {
    marginBottom: 10,
    padding: "6 8",
    borderLeft: "2px solid #f3f4f6",
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  linkLabel: {
    color: "#374151",
    fontSize: 11,
    fontWeight: "medium",
  },
  linkUrl: {
    color: "#2563eb",
    fontSize: 11,
  },
  credentialDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },
  credentialText: {
    fontSize: 11,
    color: "#4b5563",
    fontFamily: "Helvetica",
  },
  credentialLink: {
    fontSize: 11,
    color: "#2563eb",
    textDecoration: "none",
  },
  credentialContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  }
});

const Icon = ({ d }) => (
  <Svg style={styles.svgIcon} viewBox="0 0 24 24">
    <Path d={d} fill="#222" />
  </Svg>
);

const CreativeResumePDF = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section with Contact Info */}
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
              <View style={styles.contactItem}>
                <Icon d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.85-.27c.9.16 1.85.25 2.74.25a1 1 0 011 1v3.55a1 1 0 01-1 1A16.92 16.92 0 013.07 3.07a1 1 0 011-1H7.7a1 1 0 011 1c0 .89.09 1.84.25 2.74a1 1 0 01-.27.85l-2.2 2.2z" />
                <Text>{formData.phone}</Text>
              </View>
            )}
            {formData.email && formData.email.trim() && (
              <>
                {formData.phone && <Text style={styles.separator}>|</Text>}
                <View style={styles.contactItem}>
                  <Icon d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                  <Text>{formData.email}</Text>
                </View>
              </>
            )}
            {formData.linkedin && formData.linkedin.trim() && (
              <>
                {(formData.phone || formData.email) && <Text style={styles.separator}>|</Text>}
                <View style={styles.contactItem}>
                  <Link src={formData.linkedin} style={styles.headerLink}>
                    LinkedIn
                  </Link>
                </View>
              </>
            )}
            {formData.github && formData.github.trim() && (
              <>
                {(formData.phone || formData.email || formData.linkedin) && (
                  <Text style={styles.separator}>|</Text>
                )}
                <View style={styles.contactItem}>
                  <Link src={formData.github} style={styles.headerLink}>
                    GitHub
                  </Link>
                </View>
              </>
            )}
            {formData.portfolio && formData.portfolio.trim() && (
              <>
                {(formData.phone || formData.email || formData.linkedin || formData.github) && (
                  <Text style={styles.separator}>|</Text>
                )}
                <View style={styles.contactItem}>
                  <Link src={formData.portfolio} style={styles.headerLink}>
                    Portfolio
                  </Link>
                </View>
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

      {/* Skills Section */}
      {formData?.skills && formData.skills.trim() && (
        <View style={styles.section}>
          <Text style={styles.title}>SKILLS</Text>
          <View style={styles.skillsContainer}>
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

      {/* Projects Section */}
      {formData?.projects?.length > 0 && formData.projects.some(proj => proj.name || proj.description) && (
        <View style={styles.section}>
          <Text style={styles.title}>PROJECTS</Text>
          {formData.projects.map((proj, index) => (
            proj.name || proj.description ? (
              <View key={index} style={styles.projectEntry}>
                <View style={styles.row}>
                  {proj.name && (
                    <Text style={styles.entryTitle}>
                      <Text style={styles.bullet}>•</Text> {proj.name}
                    </Text>
                  )}
                  {proj.link && proj.link.trim() && (
                    <View style={styles.linkContainer}>
                      <Text style={styles.linkLabel}>Link: </Text>
                      <Link src={proj.link} style={styles.projectLink}>
                        {proj.link}
                      </Link>
                    </View>
                  )}
                </View>
                {proj.description && <Text style={styles.text}>{proj.description}</Text>}
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
              <View key={index} style={styles.experienceEntry}>
                {(exp.title || exp.company) && (
                  <Text style={styles.entryTitle}>
                    {exp.title} {exp.company && `at ${exp.company}`}
                  </Text>
                )}
                <View style={styles.row}>
                  {exp.location && (
                    <Text style={styles.location}>Location: {exp.location}</Text>
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

      {/* Education Section */}
      {formData?.education?.length > 0 && formData.education.some(edu => edu.degree || edu.school) && (
        <View style={styles.section}>
          <Text style={styles.title}>EDUCATION</Text>
          {formData.education.map((edu, index) => (
            edu.degree || edu.school ? (
              <View key={index} style={styles.entry}>
                <Text style={styles.entryTitle}>
                  {edu.degree && edu.degree}
                  {edu.school && ` at ${edu.school}`}
                  {edu.location && `, ${edu.location}`}
                </Text>
                <View style={styles.row}>
                  {edu.gpa && <Text style={styles.gpa}>GPA: {edu.gpa}</Text>}
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

      {/* Certifications Section */}
      {formData?.certifications?.length > 0 && formData.certifications.some(cert => cert.name || cert.issuer) && (
        <View style={styles.section}>
          <Text style={styles.title}>CERTIFICATIONS</Text>
          {formData.certifications.map((cert, index) => (
            cert.name || cert.issuer ? (
              <View key={index} style={styles.certificationEntry}>
                {(cert.name || cert.issuer) && (
                  <Text style={styles.certTitle}>
                    {cert.name} {cert.issuer && `by ${cert.issuer}`}
                  </Text>
                )}
                <View style={styles.row}>
                  {(cert.credentialID || cert.credentialURL) && (
                    <View style={styles.credentialDetails}>
                      <View style={styles.credentialContainer}>
                        {cert.credentialID && (
                          <Text style={styles.credentialText}>
                            ID: {cert.credentialID}
                          </Text>
                        )}
                        {cert.credentialURL && (
                          <>
                            {cert.credentialID && <Text style={styles.credentialText}> | </Text>}
                            <Link src={cert.credentialURL} style={styles.credentialLink}>
                              Verify Certificate
                            </Link>
                          </>
                        )}
                      </View>
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

export default CreativeResumePDF;
