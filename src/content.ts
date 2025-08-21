(function () {
    // scrape classes
    const courseElements = document.querySelectorAll(
        'div.default-group.term-_880_1 bb-base-course-card article div a h4.js-course-title-element'
    );
    console.log(courseElements);
    const courseNames = [...courseElements]
        .map(el => (el as HTMLElement).innerText.trim())
        .filter(name => name.length > 1);

    console.log("Found all courses: ", courseNames)

    chrome.runtime.sendMessage({
        type: "SCRAPED_COURSES",
        data: courseNames
    });
})();

