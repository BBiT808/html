const inp = prompt("태어난 년도를 입력하세요 !")

alert(`당신의 나이는 ${2026-inp} ! `)
if ((2026-inp)>20 && (2026-inp)<=150) {
    alert(`당신은 성인입니다! 건강한 생활을 유지하세요 !`)
    document.writeln(`<h2>🧚당신은 성인입니다! 건강한 생활을 유지하세요 ! 🍋‍🟩</h2>`)
} else if ((2026-inp)==20) {
    alert(`이제 성인에 접어드셨군요! 축하합니다 ^_^ !`)
    document.writeln(`<h2> 🥳 이제 성인에 접어드셨군요! 축하합니다 ! 🎉</h2>`)
} else if ((2025-inp)<20) {
    alert(`미성년자는 집으로 가.`)
    document.writeln(`<h2>👶 애는 좀 집🏠으로 가서 발🦶 닦고 잠이나 자. 🛌</h2>`)
} else {
    alert(`당신은 요정🧚이거나, 용🐲이거나, 엘프🧝이거나, 유령👻일 가능성이 높습니다.`)
    document.writeln(`<h2>🌈이세계에 온 것을 환영합니다 !🪄</h2>`)
}