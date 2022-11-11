const NFT_TYPE = {
    HIPPODROME: "hippodrome",
    HORSE: "horse",
    JOCKEY: "jockey",
};

const formFieldData = [
    {
        label: "Min Profit",
        name: "minProfit",
        type: "number",
    },
    {
        label: "Name",
        name: "name",
        type: "text",
    },
    {
        label: "Image url",
        name: "image",
        type: "text",
    },
    {
        label: "Type",
        name: "type",
        type: "select",
        options: Object.values(NFT_TYPE),
    },
];

const $form = document.querySelector("#form");
const $generateBtn = document.querySelector("#generateBtn");
const $result = document.querySelector("#result");

formFieldData.forEach((field) => {
    let fieldHtml = "";

    switch (field.type) {
        case "text":
        case "number": {
            fieldHtml = `<div class="mb-3">
                            <label for="${field.name}" class="form-label">${field.label}</label>
                            <input type="${field.type}" class="form-control" id="${field.name}" />
                        </div>`;
            break;
        }

        case "select": {
            const options = field.options
                .map(
                    (el, i) =>
                        `<option ${
                            i === 0 ? "selected" : ""
                        } value="${el}">${el}</option>`
                )
                .join(" ");
            fieldHtml = `
                        <div. class="mb-3">
                            <label class="form-label">${field.name}</label>
                            <select id="${field.name}" class="form-select">
                                ${options}
                            </select>
                        </div.`;
            break;
        }

        default:
            "";
    }
    $form.innerHTML += fieldHtml;
});

$generateBtn.onclick = () => {
    console.log("generateBtn");

    // get values
    const values = [...form.querySelectorAll("input, select")].reduce(
        (acc, field) => {
            acc[field.id] = field.value;
            return acc;
        },
        {}
    );

    // validate
    if (Object.values(values).some((el) => !el)) {
        return alert("Fill all fields");
    }

    url = new URLSearchParams(values).toString();

    console.log(Object.fromEntries(new URLSearchParams(url)));

    $result.innerHTML = `<code>${url}</code>`;
};
