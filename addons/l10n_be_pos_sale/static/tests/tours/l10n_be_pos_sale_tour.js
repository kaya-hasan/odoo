/** @odoo-module */
import * as PaymentScreen from "@point_of_sale/../tests/tours/utils/payment_screen_util";
import * as ProductScreen from "@point_of_sale/../tests/tours/utils/product_screen_util";
import * as Dialog from "@point_of_sale/../tests/tours/utils/dialog_util";
import * as PosSale from "@pos_sale/../tests/tours/utils/pos_sale_utils";
import * as Order from "@point_of_sale/../tests/tours/utils/generic_components/order_widget_util";
import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add("PosSettleOrderIsInvoice", {
    test: true,
    steps: () =>
        [
            Dialog.confirm("Open session"),
            PosSale.settleNthOrder(1),
            Order.hasLine({}),
            ProductScreen.clickPayButton(),
            PaymentScreen.isInvoiceButtonChecked(),
            PaymentScreen.clickInvoiceButton(),
            Dialog.is({ title: "This order needs to be invoiced" }),
            Dialog.confirm(),
            PaymentScreen.isInvoiceButtonChecked(),
        ].flat(),
});

registry.category("web_tour.tours").add("PosSettleOrderTryInvoice", {
    test: true,
    steps: () =>
        [
            Dialog.confirm("Open session"),
            PosSale.settleNthOrder(1),
            ProductScreen.clickPayButton(),
            PaymentScreen.clickInvoiceButton(),
            PaymentScreen.isInvoiceButtonChecked(),
        ].flat(),
});
