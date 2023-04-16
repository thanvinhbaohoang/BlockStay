# What is BlockStay

# Figma link: 
https://www.figma.com/file/q7DPWhaNb3XlDsBNC4VUfv/MeterStream?node-id=5%3A245&t=sZXJQsX1MYEUtzE1-1
![image](https://user-images.githubusercontent.com/9410877/232322078-af4ff9d6-18fa-42c3-976a-d9673ba5c848.png)

Checkout BlockStay On [DevPost](https://devpost.com/software/blockstay).

BlockStay is A Blockchain-Based Pay-as-you-go Hotel Rental and Access Service. It is a secure and efficient way to rent and access hotel rooms using blockchain wallets. The use of blockchain ensures that transactions are transparent, secure, and tamper-proof, while smart locks enable guests to unlock and lock their rooms using a digital key on their smartphone. This technology provides added security and convenience for both guests and hotel operators, and can streamline the check-in and check-out process.

# Inspiration
Booking hotels has always been difficult because plans change at the last minute. The non-refundable policy, the check-in process, and payment are both very time-consuming and inflexible. Not to mention the security hazard of losing and reissuing the hotel room keys.

Let me tell you a story. It was a long day of the road trip, and we finally arrived in Boston. Our conference was canceled, but because the hotel was non-refundable, we decided to still come down to not waste it. But darn, our planned dinner place is also so far from the hotel. So when we finally arrived at the hotel, it was really late. We waited so long for the concierge to check us in and get the room keys, considering we are only staying for some short hours before we hit the road again. It was such a hassle and so tiring. 
So the next time, we didn’t reserve a room beforehand and show up at the hotel at night. We sat in the lobby and booked a room on hotel.com, because the rates are cheap and they accept PayPal. However, the transaction took an hour before the hotel received on their end. What a waste of time!
I really wish we could just show up at a hotel, pay for a room right there on the spot, and just use our phones to check in!

# What it does
This open-source technology allows users to pay the hotel by initiating a "stream" payment with real settlement by the seconds (which traditional banking transfer cannot achieve), and check-in and unlock the IoT-enabled hotel room door using their blockchain wallet on their smartphone. It is a decentralized rental platform with secure identity verification. 

![image](https://user-images.githubusercontent.com/9410877/232323732-63779c42-c421-43cb-8d16-6164fc8fdf8f.png)

# Presentation and video
You can find more detail in the [video](https://www.youtube.com/watch?v=-aq-by1Gcvc) and [slides](https://github.com/thanvinhbaohoang/BlockStayNew/tree/main/assets) here

# How we built it
This service is built on top of Superfluid, an asset streaming protocol, and connects to Metamask, the blockchain wallet as the payment method. The service is hosted on a webpage written in React.js. 

# Challenges we ran into
There have been some issues in Wallet Connect that made the QR connect feature to not work as anticipated. So we read the documentation, troubleshoot and learned as we go. 

# Accomplishments that we're proud of
A finished, polished project made in 24h. 

# What we learned
To turn a theoretical concept like blockchain into a real-world application required a deep understanding of the technology's core value. What we learned is that the blockchain rental service model can revolutionize the way people access and manage rental properties, vehicles, and equipment.

# What's next for BlockStay
BlockStay can potentially provide transparent rental history, tokenized rental payments using IoT and smart contracts, and support reward and loyalty programs. The blockchain rental service model of BlockStay can be applied to a much wider range of applications that benefit from flexible time subscriptions, including parking meter, gym membership, car/bike/house rental, and even insurance contracts.
