const sgMail = require('@sendgrid/mail')
//ENTER YOUR EMAIL API KEY

sgMail.setApiKey(sendgridAPIkey);

sendingWelcomeEmail = (email, name) => {
    const message = {
        to: email,
        from: 'ENTER YOUR EMAIL ACC. HERE',
        subject: `welcome ${name} to parivahan`,
        text: `Hello ${name} welcome to parivahan famaily`
    }
    sgMail.send(message).then((res) => { console.log("email is successfully sent") }).catch((e) => { console.log(e); })
}
sendingDeleteEmail = (email, name) => {
    const message = {
        to: email,
        from: 'ENTER YOUR EMAIL ACC. HERE',
        subject: `Account deletion of task manager`,
        text: `Hello ${name}, Your account with ${email} has been successfully deleted form task manager database`
    }
    sgMail.send(message).then((res) => { console.log("email is successfully sent") }).catch((e) => { console.log(e); })
}
orderPlacedEmail = (email, cname) => {
    const message = {
        to: email,
        from: 'ENTER YOUR EMAIL ACC. HERE',
        subject: `Your order has been placed`,
        text: `Hello ${cname}, Your account with ${email} has an order, which has been accepted by driver`
    }
    sgMail.send(message).then((res) => { console.log("email is successfully sent") }).catch((e) => { console.log(e); })
}
orderPlacedEmail_new = (email, cname, pickup_address, drop_address, order_type, quantity, rate) => {
    console.log("we are in OderPlacedEmail_new ");
    const message = {
        to: email,
        from: 'ENTER YOUR EMAIL ACC. HERE',
        subject: `Your order has been placed`,
        text: `Hello ${cname}, Your account with ${email} has an order, which has been accepted by driver`,
        html: `Hello ${cname},<br>` +
            `Your account with ${email} has an order,<br>` +
            'which has been accepted by driver<br>' +
            `order detais are here<br>` +
            `pickup_address :- ${pickup_address}<br>` +
            `drop_address :- ${drop_address}<br>` +
            `order_type :- ${order_type}<br>` +
            `quantity :- ${quantity}<br>` +
            `rate :- ${rate}<br>`
    }
    sgMail.send(message).then((res) => { console.log("email is successfully sent") }).catch((e) => { console.log(e); })
}

module.exports = {
    sendingWelcomeEmail,
    sendingDeleteEmail,
    orderPlacedEmail,
    orderPlacedEmail_new
}
