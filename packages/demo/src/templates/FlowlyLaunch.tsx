import type { ReactElement } from "react";
import {
  Email,
  Row,
  Column,
  Paragraph,
  Heading,
  Button,
  Divider,
  Image,
  ColumnLayouts,
} from "@unlayer/react-elements";

const sansFont = {
  label: "Inter",
  value: "'Inter', system-ui, -apple-system, sans-serif",
};

export default function FlowlyEmail(): ReactElement {
  return (
    <Email
      backgroundColor="#f4f4f4"
      textColor="#18181b"
      contentAlign="center"
      contentWidth="600px"
      fontFamily={sansFont}
      previewText="Everything you need to move faster with Flowly."
    >
      {/* Top Header Logo */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#F4F4F4" padding="24px 0px 16px 0px">
        <Column>
          <Image
            src={{ url: "/logo.svg", width: 90, height: 90 }}
            altText="Flowly Logo"
            textAlign="center"
          />
        </Column>
      </Row>

      {/* Hero Header Banner Image */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="20px 20px 0px 20px">
        <Column>
          <Image
            src={{ url: "/header.svg", width: 560, height: 320 }}
            altText="Flowly Hero Banner"
            textAlign="center"
          />
        </Column>
      </Row>

      {/* Hero Title & Intro Body Text */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="30px 40px 10px 40px">
        <Column>
          <Heading
            text="Everything you need to move faster"
            headingType="h1"
            fontSize="32px"
            fontWeight={700}
            color="#09090b"
            textAlign="left"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Flowly helps modern teams automate repetitive work, connect their favorite tools, and build intelligent workflows that move faster. Spend less time managing tasks and more time creating what matters."
            fontSize="14px"
            color="#71717a"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* 3 Grid Badges/Icons (Stacked single-column) */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="10px 40px">
  <Column>
    <Paragraph
      html={`
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td style="width: 48px; vertical-align: middle;">
              <img src="/Automate.svg" width="40" height="40" alt="Automate" style="display: block;" />
            </td>
            <td style="vertical-align: middle; padding-left: 12px;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 500; color: #535355; line-height: 1.2;">
                Automate
              </h1>
            </td>
          </tr>
        </table>
      `}
      fontFamily={sansFont}
    />
  </Column>
</Row>
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="10px 40px">
  <Column>
    <Paragraph
      html={`
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td style="width: 48px; vertical-align: middle;">
              <img src="/Connect.svg" width="40" height="40" alt="Automate" style="display: block;" />
            </td>
            <td style="vertical-align: middle; padding-left: 12px;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 500; color: #535355; line-height: 1.2;">
                Connect
              </h1>
            </td>
          </tr>
        </table>
      `}
      fontFamily={sansFont}
    />
  </Column>
</Row>
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="10px 40px">
  <Column>
    <Paragraph
      html={`
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td style="width: 48px; vertical-align: middle;">
              <img src="/Accelerate.svg" width="40" height="40" alt="Automate" style="display: block;" />
            </td>
            <td style="vertical-align: middle; padding-left: 12px;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 500; color: #535355; line-height: 1.2;">
                Accelerate
              </h1>
            </td>
          </tr>
        </table>
      `}
      fontFamily={sansFont}
    />
  </Column>
</Row>

      {/* Primary CTA */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="10px 40px 40px 40px">
        <Column>
          <Button
            text="Explore Flowly  ↗"
            buttonColors={{ backgroundColor: "#18181b", color: "#ffffff" }}
            padding="14px 32px"
            borderRadius="24px"
            fontSize="14px"
            fontWeight={600}
            textAlign="center"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Spacing Divider */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#f4f4f4" padding="12px 0px">
        <Column />
      </Row>

      {/* BUILD FOR SPEED Header */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="40px 40px 10px 40px">
        <Column>
          <Heading
            text="BUILD FOR SPEED"
            headingType="h4"
            fontSize="12px"
            fontWeight={700}
            color="#71717a"
            textAlign="left"
            letterSpacing="1px"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

<Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="12px 40px">
  <Column>
    <Paragraph
      html={`
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td style="width: 56px; vertical-align: top; padding-right: 16px;">
              <img src="/1st.svg" width="44" height="44" alt="Smart Automation" style="display: block; border: 0;" />
            </td>
            <td style="vertical-align: top;">
              <h3 style="margin: 0 0 6px 0; font-size: 16px; font-weight: 600; color: #09090b; line-height: 1.3;">Smart Automation</h3>
              <p style="margin: 0; font-size: 13px; color: #71717a; line-height: 1.5;">Create powerful workflows with AI suggestions and no-code.</p>
            </td>
          </tr>
         
          <tr>
            <td colspan="2" style="height: 20px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>
          
          <tr>
            <td colspan="2" style="border-bottom: 1px solid #f4f4f5; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>
        </table>
      `}
      fontFamily={sansFont}
    />
  </Column>
</Row>


<Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="12px 40px">
  <Column>
    <Paragraph
      html={`
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td style="width: 56px; vertical-align: top; padding-right: 16px;">
              <img src="/2nd.svg" width="44" height="44" alt="Connect Anything" style="display: block; border: 0;" />
            </td>
            <td style="vertical-align: top;">
              <h3 style="margin: 0 0 6px 0; font-size: 16px; font-weight: 600; color: #09090b; line-height: 1.3;">Connect Anything</h3>
              <p style="margin: 0; font-size: 13px; color: #71717a; line-height: 1.5;">Integrate your favorite tools and keep everything in sync.</p>
            </td>
          </tr>
          
          <tr>
            <td colspan="2" style="height: 20px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>
          
          <tr>
            <td colspan="2" style="border-bottom: 1px solid #f4f4f5; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>
        </table>
      `}
      fontFamily={sansFont}
    />
  </Column>
</Row>


<Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="12px 40px">
  <Column>
    <Paragraph
      html={`
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td style="width: 56px; vertical-align: top; padding-right: 16px;">
              <img src="/3rd.svg" width="44" height="44" alt="Real-time Insights" style="display: block; border: 0;" />
            </td>
            <td style="vertical-align: top;">
              <h3 style="margin: 0 0 6px 0; font-size: 16px; font-weight: 600; color: #09090b; line-height: 1.3;">Real-time Insights</h3>
              <p style="margin: 0; font-size: 13px; color: #71717a; line-height: 1.5;">Track performance and get actionable insights as they happen.</p>
            </td>
          </tr>
          
          <tr>
            <td colspan="2" style="height: 20px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>
          
          <tr>
            <td colspan="2" style="border-bottom: 1px solid #f4f4f5; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>
        </table>
      `}
      fontFamily={sansFont}
    />
  </Column>
</Row>


<Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="12px 40px 40px 40px">
  <Column>
    <Paragraph
      html={`
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td style="width: 56px; vertical-align: top; padding-right: 16px;">
              <img src="/4th.svg" width="44" height="44" alt="Secure & Reliable" style="display: block; border: 0;" />
            </td>
            <td style="vertical-align: top;">
              <h3 style="margin: 0 0 6px 0; font-size: 16px; font-weight: 600; color: #09090b; line-height: 1.3;">Secure & Reliable</h3>
              <p style="margin: 0; font-size: 13px; color: #71717a; line-height: 1.5;">Enterprise-grade security so you can scale with confidence.</p>
            </td>
          </tr>
        </table>
      `}
      fontFamily={sansFont}
    />
  </Column>
</Row>
      
<Row layout={ColumnLayouts.OneColumn} backgroundColor="#f4f4f4" padding="12px 0px">
  <Column />
</Row>


<Row layout={ColumnLayouts.OneColumn} backgroundColor="#f4f4f4" padding="20px 40px">
  <Column>
    <Paragraph
      html={`
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border-collapse: separate; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
          <tr>
            
            <td style="width: 50%; vertical-align: middle; padding: 0; line-height: 0;">
              <img 
                src="/ai.svg" 
                alt="Introducing AI Agents" 
                style="width: 100%; height: auto; max-height: 320px; object-fit: cover; display: block; border: 0;" 
              />
            </td>

            
            <td style="width: 50%; vertical-align: middle; padding: 32px 28px; background-color: #ffffff;">
              
              
              <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                <tr>
                  <td style="background-color: #3b82f6; border-radius: 20px; padding: 4px 12px;">
                    <span style="color: #ffffff; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; line-height: 1; display: inline-block;">
                      &#10022; NEW FEATURE
                    </span>
                  </td>
                </tr>
              </table>

             
              <h2 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 700; color: #09090b; line-height: 1.25;">
                Introducing<br />AI Agents
              </h2>

              
              <p style="margin: 0 0 20px 0; font-size: 12px; color: #71717a; line-height: 1.5;">
                Autonomous teammates that take actions, solve problems, and keep your business moving day or night.
              </p>

              
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #18181b; border-radius: 8px; padding: 10px 18px; text-align: center;">
                    <a href="#" style="color: #ffffff; font-size: 12px; font-weight: 600; text-decoration: none; display: inline-block;">
                      Explore Flowly
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      `}
      fontFamily={sansFont}
    />
  </Column>
</Row>


      {/* Blue CTA Section Card with Background Graphic */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#fefefe" padding="32px 30px 32px 30px">
        <Column>
          <Heading
            text="Ready to streamline your work?"
            headingType="h2"
            fontSize="22px"
            fontWeight={700}
            color="#09090b"
            textAlign="left"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Start your free trial today."
            fontSize="14px"
            color="#2563eb"
            textAlign="left"
            fontFamily={sansFont}
          />
          <Button
            text="Start free trial →"
            buttonColors={{ backgroundColor: "#2563eb", color: "#ffffff" }}
            padding="12px 24px"
            borderRadius="8px"
            fontSize="13px"
            fontWeight={600}
            textAlign="left"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Footer Section & Social Icons */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#ffffff" padding="30px 40px 30px 40px">
        <Column>
          <Image
            src={{ url: "/FLOWLY.svg", width: 60, height: 24 }}
            altText="FLOWLY"
            textAlign="left"
          />
          <Divider borderTopWidth="1px" borderTopColor="#e4e4e7" borderTopStyle="solid" />
          <Image
            src={{ url: "/logo.svg", width: 90, height: 20 }}
            altText="Social Links"
            textAlign="center"
          />
          <Paragraph
            html="You're receiving this email because you signed up for updates from Flowly.<br/>If you prefer not to receive these emails, you can unsubscribe.<br/><br/>© 2026 Flowly Inc. • 123 Market Street, San Francisco, CA 94103"
            fontSize="11px"
            color="#a1a1aa"
            textAlign="center"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
    </Email>
  );
}