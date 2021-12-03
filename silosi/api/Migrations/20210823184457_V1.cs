using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Fabrika",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fabrika", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Silos",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Oznaka = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Kapacitet = table.Column<int>(type: "int", nullable: false),
                    TrenutnaVrednost = table.Column<int>(type: "int", nullable: false),
                    FabrikaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Silos", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Silos_Fabrika_FabrikaID",
                        column: x => x.FabrikaID,
                        principalTable: "Fabrika",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Silos_FabrikaID",
                table: "Silos",
                column: "FabrikaID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Silos");

            migrationBuilder.DropTable(
                name: "Fabrika");
        }
    }
}
