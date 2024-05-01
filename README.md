# AgrowCredit 2.0 - Simplifying agro-lending using Google GenAI Products

## About the product - 
- The product is a WebApp called "AgrowCredit" which provides a solution for evaluating credit worthiness of farmers by
leveraging data from PAN and Aadhaar database to decrease loan turnaround times and efforts of bank employees.
- The problem our WebApp aims to address is the challenge faced by banks and NBFCs in extending loans to rural farmers due to
the absence of traditional credit histories. Due to missing credit profile, banks and NBFCs are unable to assess credit
worthiness and risk assessment associated with extending credit, as well as a method for fraud detection.
- Our solution involves the generation of a comprehensive credit score from government social security numbers which incorporates
various factors such as crop yield score, net cashflow, risk capacity.
- Our target industry is BFSI, and our user group includes the bank employees responsible for processing loan applications of
farmers. Our aim is to onboard more rural farmers as clients, as they form a large part of total population in the APAC region.
Generative AI solutions are also used to provide intelligent customer service, and generate drafts of financial documents to
accelerate and streamline the loan application process.
- Our solution also features an app “AgroBuddy” using enterprise search methods to provide information about agricultural
practices and other data associated to agro-lending to help make better decisions.

## Opportunity :
- The problem our WebApp aims to address is the challenge faced by banks and NBFCs in extending loans to rural farmers
due to the absence of traditional credit histories. Our aim is to help BFSI companies to aid in proper decision making
on which farmers to extend credit to using the power of predictive analysis and Generative AI.
- Our solution involves the generation of a comprehensive credit score which incorporates various factors such as crop
yield score , net cashflow and various financial infractions, and provide an end-to-end product to provide loans to eligible
farmers and accelerate the entire process.
- Our target industry is BFSI, and our user group includes the bank employees responsible for processing loan applications
of farmers. Our product aims to streamline the entire loan sanctioning process by providing end-to-end service from data
collection, running AI models for predictive and generative analysis to aid in decision making process, and accelerate loan
sanctioning by generating financial documents.
- The benefits for these users are manifold: faster loan turnarounds , increase in loan application rates and reduced efforts
as our technology streamlines the verification process, especially that of the livestock values which is verified from census
data that is officially conducted and recorded by the Department of Animal Husbandry and Dairying.

## List of Features offered by the solution

List of features offered by the solution:

1. *Evaluating the credit worthiness:* Synthetic data of Adhaar and PAN is created and stored on MongoDB which acts as dummy
government database, from which a dataset is created on BigQuery to calculate a creditworthiness score (CWS), using weighted
parameters: Risk Capacity Assessment, Crop Yield Score, Annual Net Cash Flow & Financial Infraction.
An AutoML model is trained on this dataset on Vertex Al, to predict the creditworthiness score(CWS) for any farmer, 
by creating an endpoint of the model for online predictions.
Batch predictions is done for generating CWS of the farmer for 3 years, to create a time-series dataset to fed to the TFT.

3. *Risk identification and mitigation:* The CWS score is generated over a time series (3 years), and then time series analysis
is done to create predictive data (for next 3 years) using time series forecasting methods using Temporal Fusion Transformer that uses
attention to forecast time series over multiple horizons.
This provides a comprehensive analysis of the credit worthiness of the farmer for risk identification and mitigation.

3. *Fraud Detection:* Anomaly detection on bank balance data of the farmer is done using Time Series Insights API,
to find anomalies on the historical bank balance data, as an indication of fraud.

4. *Customer Service Agent and Personalised Financial Advice:* A customer service agent using DialogFlow CX grounded
on the BFSI enterprise data, including financial and economic data, to provide intelligent customer service to the BFSI
employee for assisting the loan application process and provide financial recommendations. DialogFlow CX Phone gateway is
used to provide IVR Speech facilities, for faster and easier access to information.

5. *Contract Generation* of bank financial documents such as loan proposal, crop lien document, mortgage agreement etc for
accelerating and streamlining the loan sanctioning process.
Data from a Google Form is analyzed through a custom prompt model made in Google AI Studio through a custom prompt
using the Gemini Pro- 1.5 model made in Google AI Studio and passed though multiple API calls to generate the draft of the
contract to be edited easily by the BFSI employee.

7. *AgroData:* A platform for BFSI employees to have information on current agricultural related information using enterprise
search methods on the Gen App builder.
A bank employee is not equipped with data on agricultural practices, so a data store of agricultural related information of
government and census data has been compiled, so that when sanctioning a loan to a farmer for a particular season, the BFSI
employee will have information about the related agricultural practice.

## Architecture Diagram
![Architecture Diagram](https://github.com/ishanrahman02/Ghack/blob/main/project_media/ArchDiagram.jpg)

## List of Google AI tools used: 
- AutoML on Vertex AI: Training a model on a dataset created for calculating the creditworthiness score
- Temporal Fusion Transformer on Vertex AI: Creating a time-series forecast to generate the creditworthiness of a farmer for the future, based on historical trends.
- Google AI Studio Gemini 1.0 Pro API: Contract Generation Portal
- Dialogflow CX + Agent Builder: Customer Service Automation and financial recommendations bot on financial and economic related datastore (RAG Implementation)
- Gen App Builder + Enterprise Search: Knowledge retreval of agriculture related information (RAG Implementation)
- Gemini Code Assist: Throughout the code development process.

## Demo video
[![Demo Video](http://img.youtube.com/vi/52ePQGXI9lA/0.jpg)](http://www.youtube.com/watch?v=52ePQGXI9lA)
