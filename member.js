function skillsMember()
{
    var skills = ["HTML", "CSS", "JavaScript", "Python", "PHP", "Ruby", "Java"];
    var member = ["John", "Jane", "Sally", "Billy"];
    var memberSkills = [];
    var memberSkills = member.map(function(member){
        return member + " knows: " + skills.join(", ");
    });
    return memberSkills;
}